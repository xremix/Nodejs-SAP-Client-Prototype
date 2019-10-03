var sapClient = require('../clients/sap-client');
sapClient.initByEnvironment();

exports.getCustomerById = function(customerNumber, callback){
  // Docs: https://www.se80.co.uk/sapfms/b/bapi/bapi_customer_getlist.htm
  // DOCS for IDRANGE https://www.sapdatasheet.org/abap/tabl/bapicustomer_idrange.html
  var bapiName = 'BAPI_CUSTOMER_GETLIST';
  var parameters = {
    MAX_ROWS: 3,
    IDRANGE: [{
      SIGN:      "I",
      OPTION:    "CP",
      LOW:       customerNumber
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
