const express = require('express');
require('dotenv').load();

const app = express();
const port = 8080;
var sapClient = require('./clients/sap-client');

sapClient.init({
  user: process.env.USER,
  passwd: process.env.PASSWD,
  ashost: process.env.ASHOST,
  sysnr: process.env.SYSNR,
  client: process.env.CLIENT,
  lang: process.env.LANG
});

app.get('/', function (req, res) {
  res.send('Service is up!');
});

app.get('/users', function (req, res) {
  sapClient.connect(function(err, res){
    res.send('Service is up!');
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
