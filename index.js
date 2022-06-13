const express = require('express')
const app = express()
const cors = require('cors')
const port = 3000
const person_tb = require('./server/utils/pgqueries')

/*
app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
*/


//app.use(express.urlencoded());
app.use(cors())
app.use(express.json())
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
/*  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000/persona');
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000/');
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000/test');
  */
 res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With');
  next();
});


app.post('/test', (req, res) => {
   var response = {
    names : req.params.names,
    age : req.body.age,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    id_person: req.body.id_person
  }
  console.log(req.body);  
   //res.end(JSON.stringify(response));
   res.end();
  //res.json({requestBody: req.body})  // <==== req.body will be a parsed JSON object
})

app.get('/', (req, res) => {
  person_tb.getPerson()
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})

app.post('/persona', (req, res) => {
  //res.send(req.body)
    person_tb.createPerson(req.body)
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