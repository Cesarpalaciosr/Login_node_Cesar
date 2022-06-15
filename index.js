const express = require('express')
const app = express()
const session = require('express-session')
const cors = require('cors')
const port = 3000
const cookieParser = require('cookie-parser')
const person_tb = require('./server/utils/pgqueries')

//const { Session } = require('express-session')
//const { response } = require('express')
/*
app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
*/


//app.use(express.urlencoded());
app.use(cookieParser())
app.use(cors())

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  /*  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000/persona');
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000/');
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000/test');
  */
 //res.header("Access-Control-Allow-Origin",req.headers.origin);
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers','application/json', 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With');
  next();
});
app.use(express.json())
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}))

//app.use(Session())

//función para limpiar la caché luego del logout
app.use(function(req, res, next) {
  if (!req.user)
      res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
  next();
});

app.post('/test', (req, res) => {
   var response = {
   /* names : req.body.names,
    age : req.body.age,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    id_person: req.body.id_person*/
  }

  console.log(JSON.stringify(req.body));  
   //res.end(JSON.stringify(response));
   res.end();
  //res.json({requestBody: req.body})  // <==== req.body will be a parsed JSON object
})

/*METODOS GET*/
//get inutil xd
app.get('/', (req, res) => {
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
  
  /*person_tb.getPerson()
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })*/
})

/*app.get('/logout', function (req, res) {
	req.session.destroy(() => {
	  res.redirect('../index.html') // siempre se ejecutará después de que se destruya la sesión
	})
});
*/



/*Registro y login metodo post */

//registro
app.post('/persona', (req, res) => {
  console.log(req.body)
    person_tb.createPerson(req.body)
    .then(response => {
      res.status(200).send(response);
    })
    .catch(error => {
      res.status(500).send(error);
    })
  })


  //login
  app.post('/login', (req, res) => {

    
    //res.send(req.body)
      person_tb.comprobatePerson(req.body)
      /*.then(function() {
        req.session.id = 1;
        req.session.name = results[0].name;
        res.render('http://localhost:3000/views/feed.html',{
          alert: true,
					alertTitle: "Conexión exitosa",
					alertMessage: "¡LOGIN CORRECTO!",
					alertIcon:'success',
					showConfirmButton: false,
					timer: 1500,
					ruta: ''
        })
      })*/
      .then(response => {
          res.status(200).send(response);
      })
      
      .catch(error => {
        res.status(500).send(error);
      })
    })
  


  app.delete('/persona/:id_persona', (req, res) => {
    person_tb.deletePerson(req.params.id_persona)
    .then(response => {
      res.status(200).send(response);
    })
    .then(console.log(req.params.id_persona))
    .catch(error => {
      console.log(error)
      res.status(500).send(error);
    })
  })

  app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })
