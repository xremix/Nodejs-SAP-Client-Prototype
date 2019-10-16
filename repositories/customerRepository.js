var sapRfcService = require('../services/sapRfcService');
sapRfcService.initByEnvironment();

exports.searchCustomerById = function(query, callback){
  // Docs: https://www.se80.co.uk/sapfms/b/bapi/bapi_customer_getlist.htm
  // DOCS for IDRANGE https://www.sapdatasheet.org/abap/tabl/bapicustomer_idrange.html
  var bapiName = 'BAPI_CUSTOMER_GETLIST';
  var parameters = {
    MAX_ROWS: 3,
    IDRANGE: [{
      SIGN:      "I",
      OPTION:    "CP", // contains pattern
      LOW:       query
    }]
  };

  sapRfcService.sendBAPI(bapiName, parameters, function(err, res){
    if (err) {
      console.error('Error while getting the users...', err);
      callback(null);
      return;
    }

    // TODO double check which data comes back and convert to viewmodels
    callback(res);
  });
};

exports.getCustomerById = function(id, callback){
  var bapiName = 'BAPI_CUSTOMER_GETLIST';
  var parameters = {
    MAX_ROWS: 3,
    IDRANGE: [{
      SIGN:      "I",
      OPTION:    "EQ", // contains pattern
      LOW:       id
    }]
  };

  sapRfcService.sendBAPI(bapiName, parameters, function(err, res){
    if (err) {
      console.error('Error while getting the users...', err);
      callback(null);
      return;
    }

    // TODO double check which data comes back and convert to viewmodels
    callback(res);
  });
};
