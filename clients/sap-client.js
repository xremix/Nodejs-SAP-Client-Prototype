'use strict';
const rfcClient = require('node-rfc').Client;

var client = null;

/**
* Initializes the SAP-CLient by passing the environment
* @param {object}      env         A parameter with all environment variables. This should contain user, passwd, ashost, sysnr, client, lang
*/
exports.init = function (env) {
  // create new client with the ABAP system RFC connection parameters
  client = new rfcClient(env);

  // echo SAP NW RFC SDK and nodejs/RFC binding version
  console.log('Client version: ', client.version);
};

/**
* Initializes the SAP-Client by the environment variables
*/
exports.initByEnvironment = function () {
  exports.init({
    user: process.env.USER,
    passwd: process.env.PASSWD,
    ashost: process.env.ASHOST,
    sysnr: process.env.SYSNR,
    client: process.env.CLIENT,
    lang: process.env.LANG
  });
}

// Example from http://blog.maruskin.eu/2018/04/how-to-call-bapi-in-sap-from-nodejs-app.html
/**
* Sendnig data to a BAPI
* @param {string}      bapiName         Name of the BAPI that will get called via RFC.
* @param {structure}   parameters       ABAP table(array) containing an ABAP structure.
* @param {function}    callback         Callback function that will response with an error and result object
*/
exports.sendBAPI = function(bapiName, parameters, callback){
  // open connection
  client.connect(function(err) {
    if (err) {
      // check for login/connection errors
      return console.error('could not connect to server', err);
    }
    // invoke ABAP function module, passing structure and table parameters

    client.invoke(bapiName, parameters,
      function(err, res) {
        console.log('BAPI ' + bapiName +' incomming...');
        console.log('Error: ' + err);
        console.log('Response: ' + res);
        callback(err, res);
      });
    });
  };
