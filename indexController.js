require('dotenv').config();
const express = require('express');
var path = require('path');
var userRepository = require('./repositories/userRepository');
var customerRepository = require('./repositories/customerRepository');


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

app.get('/api/customers/:id', function (req, res) {
  customerRepository.getCustomerById(req.params.id, function(customers){
    res.send(customers);
  });
});
app.get('/api/customers/search', function (req, res) {
    customerRepository.searchCustomerById(req.params.q, function(customers){
    res.send(customers);
  });
});

app.listen(port, () => console.log(`Example app listening on http://localhost:${port}!`));
