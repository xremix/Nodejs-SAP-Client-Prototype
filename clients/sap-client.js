'use strict';
const rfcClient = require('node-rfc').Client;

var client = null;

exports.init = function (env) {
  // create new client with the ABAP system RFC connection parameters
  this.client = new rfcClient(env);

  // echo SAP NW RFC SDK and nodejs/RFC binding version
  console.log('Client version: ', client.version);
};

exports.connect = function(callback){
  // open connection
  this.client.connect(function(err) {
      if (err) {
          // check for login/connection errors
          return console.error('could not connect to server', err);
      }

      // invoke ABAP function module, passing structure and table parameters

      // ABAP structure
      const structure = {
          RFCINT4: 345,
          RFCFLOAT: 1.23456789,
          // or RFCFLOAT: require('decimal.js')('1.23456789'), // as Decimal object
          RFCCHAR4: 'ABCD',
          RFCDATE: '20180625', // in ABAP date format
          // or RFCDATE: new Date('2018-06-25'), // as JavaScript Date object
      };

      // ABAP table
      let table = [structure];

      client.invoke('STFC_STRUCTURE', { IMPORTSTRUCT: structure, RFCTABLE: table }, function(err, res) {
          if (err) {
              return console.error('Error invoking STFC_STRUCTURE:', err);
          }
          console.log('STFC_STRUCTURE call result:', res);
          callback(err, res);
      });
  });
}
