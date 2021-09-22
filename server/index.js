const express = require('express');
const connection = require('../database/db.js');
const model = require('../database/models.js');
const app = express();
const axios = require('axios');
const port = 9009;
var fs = require('fs');



app.use(express.json());
app.use(express.static(__dirname + '/../dist'))

app.post(`/users`, (req, res) => {
  model.addUser(req, (error, results) => {
    if (error) {
      res.send(error);
    } else {
      res.status(201);
      res.send(results);
    }
  });
});

app.get('/users', (req, res) => {
  model.getUser(req, (error, results) => {
    if (error) {
      res.send(error);
    } else {
      res.status(200);
      res.send(results);
    }
  });
});

app.post('/trips', (req, res) => {
  model.postATrip(req, (error, results) => {
    if (error) {
      res.send(error);
    } else {
      res.status(201);
      res.send(results);
    }
  });
});

app.get('/trips', (req, res) => {
  model.getTrips(req, (error, results) => {
    if (error) {
      res.send(error);
    } else {
      res.status(200);
      res.send(results);
    }
  });
});

app.listen(port, () => {
  console.log(`listening on ${port}...`)
});