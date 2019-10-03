var sapClient = require('./clients/sap-client');
require('dotenv').load();

sapClient.init({
  user: process.env.USER,
  passwd: process.env.PASSWD,
  ashost: process.env.ASHOST,
  sysnr: process.env.SYSNR,
  client: process.env.CLIENT,
  lang: process.env.LANG
});

sapClient.getUsers(function(err, res){
  console.log("Yeah... we did it");
  console.log(err);
  console.log(res);
});
