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

sapClient.connect(function(err, res){});
