const express = require('express')
const app = express()
const port = 3001
const person_tb = require('./pgqueries')

app.use(express.json())
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With');
  next();
});

app.get('/', (req, res) => {H
  person_tb.getPerson()
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})

app.post('/persona', (req, res) => {
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