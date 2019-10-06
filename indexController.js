require('dotenv').config();
const express = require('express');
var path = require('path');
var userRepository = require('./repositories/userRepositoryMock');


const app = express();
const port = 8080;

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/api/up', function (req, res) {
  res.send('Service is up!');
});

app.get('/api/users', function (req, res) {
  userRepository.getUsers(function(users){
    res.send(users);
  });
});

app.listen(port, () => console.log(`Example app listening on http://localhost:${port}!`));
