var sapClient = require('../clients/sap-client');
sapClient.initByEnvironment();

exports.getUsers = function(callback){
  // Docs: https://www.se80.co.uk/sapfms/b/bapi/bapi_user_getlist.htm
  // DOCS for SELECTION_RANGE / bapiussrge:  https://www.sapdatasheet.org/abap/tabl/bapiussrge.html

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
