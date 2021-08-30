const express = require('express');
const app = express();
const axios = require('axios');
const port = 7800;



app.use(express.json());
app.use(express.static(__dirname + '/../dist'))

app.listen(port, () => {
  console.log(`listening on ${port}...`)
});