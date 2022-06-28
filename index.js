const express = require("express");
const app = express();
const session = require("express-session");
const cors = require("cors");
const port = 3000;
const cookieParser = require("cookie-parser");
const pgqueries = require("./server/utils/pgqueries");

// Middlewares
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
app.use(express.json());
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);
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
  //res.json({requestBody: req.body})  // <==== req.body will be a parsed JSON object
});

/*METODOS GET*/
//get inutil xd
app.get("/api/users", (req, res) => {
  res.json("HOLA");
  /*if (req.session.id == 1) {
		res.end()
    .render('index',{
			login: true,
			name: req.session.name			
		});				
	} else {
		res.redirect('http://localhost:3000/views/feed.html',{
			login:false,
			name:req.session.name
		});				
	}
	res.end();
  
  /*pgqueries.getPerson()
  .then(response => {
    res.status(200).json(response);
  })
  .catch(error => {
    res.status(500).json({
      detail: error
    });
  })*/
});

/*app.get('/logout', function (req, res) {
	req.session.destroy(() => {
	  res.redirect('../index.html') // siempre se ejecutará después de que se destruya la sesión
	})
});
*/

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
  //res.json(req.body)
  pgqueries
    .comprobatePerson(req.body)
    .then((role) => {
      res.status(200).json({
        status: 200,
        role: role,
      });
    })
    .catch((error) => {
      res.status(500).json({
        detail: error,
      });
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
