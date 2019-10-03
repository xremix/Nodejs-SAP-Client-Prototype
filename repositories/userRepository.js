var sapClient = require('../clients/sap-client');

sapClient.init({
  user: process.env.USER,
  passwd: process.env.PASSWD,
  ashost: process.env.ASHOST,
  sysnr: process.env.SYSNR,
  client: process.env.CLIENT,
  lang: process.env.LANG
});
exports.getUsers = function(callback){
  // Docs: https://www.consolut.com/s/sap-ides-zugriff/d/e/doc/E-BAPI_USER_GETLIST/
  var bapiName = 'BAPI_USER_GETLIST';
  var parameters = {
    MAX_ROWS: 3,
    SELECTION_RANGE: [{
      PARAMETER: "USERNAME",
      SIGN:      "I",
      OPTION:    "CP",
      LOW:       "A*"
    }]
  };

  sapClient.sendBAPI(bapiName, parameters, function(err, res){
    if (err) {
      console.error('Error while getting the users...', err);
      callback(null);
      return;
    }

    // TODO double check which data comes back and convert to viewmodels
    callback(res);
  });

});
