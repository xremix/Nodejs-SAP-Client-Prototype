require('dotenv').config();
const express = require('express');
var sapClient = require('./clients/sap-client');

const app = express();
const port = 8080;

app.get('/', function (req, res) {
  res.send('Service is up!');
});

app.get('/users', function (req, res) {
  userRepository.getUsers(function(users){
    res.send(users);
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
