const pgqueries = require("./server/utils/pgqueries");
const express = require("express");
const app = express();
const session = require("express-session");
const cors = require("cors");
const port = 3000;
const cookieParser = require("cookie-parser");
const oneDay = 1000* 60 * 60 *24;

// Middlewares
app.use(session({
  secret: "secret key",
  saveUninitialized:false,
  cookie: { path: '/', httpOnly:true, maxAge: oneDay, secure:true,  },
  resave: false,
})
);
app.use(express.json());
app.use(express.static("src", { extensions: ["html"] }));
app.use(cookieParser());
app.use(cors());
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "application/json",
    "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
  );
  next();
});
// Función para limpiar la caché luego del logout
app.use(function (req, res, next) {
  if (!req.user)
    res.header("Cache-Control", "private, no-cache, no-store, must-revalidate");
  next();
});

// Routes
// GET
app.post("/api/test", (req, res) => {
  const { name, age, username, email, password, id_person } = req.body;

  const response = {
    name: name,
    age: age,
    username: username,
    email: email,
    password: password,
    id_person: id_person,
  };

  console.log(JSON.stringify(req.body));
  res.end();
});

/*METODOS GET*/

// POST /api/register
app.post("/api/register", (req, res) => {
  console.log("HOLA", req.body);
  pgqueries
    .createPerson(req.body)
    .then((response) => {
      res.status(200).json({
        status: 200,
        response: response,
      });
    })
    .catch((error) => {
      res.status(500).json({
        detail: error,
      });
    });
});

// POST /api/login
app.post("/api/login", (req, res) => {
  pgqueries.comprobatePerson(req.body)
    .then((role) => {
      if(role == undefined){
        console.log('te la comes')
        res.status(403)
      } else{
        req.session.login = 'logged';
        req.session.username = req.body.username;
        req.session.role = role;
        req.session.username = req.body.username
        console.log(`${req.session.username}, ${req.session}`)
                res.status(200).json({
          status: 200,
          role: role,
          session_username: req.session.username,
        });
        }
    })
    .catch((error) => {
      res.status(500).json({
        detail: error,
      });
    });
});
app.get("/api/login",function(req,res){
  console.log('hola pase por el get')
  
  req.session.login = true;
  req.session.username = req.body.username;
  req.session.role = role;
  req.session.evenobjects = { data : 'somedata' };
  console,log(req.session)
  res.send('Session set!');
});
app.get('/api/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      res.status(500).send('Could not log out.');
    } else {
      console.log('me voy a destruir')
      res.status(200).send('login');
    }
  });
});
app.delete("/persona/:id_persona", (req, res) => {
  pgqueries
    .deletePerson(req.params.id_persona)
    .then((response) => {
      res.status(200).json(response);
    })
    .then(console.log(req.params.id_persona))
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        detail: error,
      });
    });
});

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});