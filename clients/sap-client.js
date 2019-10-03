'use strict';
const rfcClient = require('node-rfc').Client;

var client = null;

exports.init = function (env) {
  // create new client with the ABAP system RFC connection parameters
  this.client = new rfcClient(env);

  // echo SAP NW RFC SDK and nodejs/RFC binding version
  console.log('Client version: ', client.version);
};

// Example from http://blog.maruskin.eu/2018/04/how-to-call-bapi-in-sap-from-nodejs-app.html
/**
* Sendnig data to a BAPI
* @param {string}      bapiName         Name of the BAPI that will get called via RFC.
* @param {structure}   parameters       ABAP table(array) containing an ABAP structure.
* @param {function}    callback         Callback function that will response with an error and result object
*/
exports.sendBAPI = function(bapiName, parameters, callback){
  // open connection
  this.client.connect(function(err) {
    if (err) {
      // check for login/connection errors
      return console.error('could not connect to server', err);
    }
    // invoke ABAP function module, passing structure and table parameters

    this.client.invoke(bapiName, parameters,
      function(err, res) {
        console.log('BAPI '+bapiName +' incomming...');
        console.log('Error: ' + err);
        console.log('Response: ' + res);
        callback(err, res);
      });
    });
  };
