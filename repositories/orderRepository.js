var sapRfcService = require('../services/sapRfcService');
var Order = require('../viewModels/order');

sapRfcService.initByEnvironment();

exports.orderByCustomer = function(customerId, callback) {
  // Docs: https://www.sapdatasheet.org/abap/func/bapi_salesorder_getlist.html
  var bapiName = 'BAPI_SALESORDER_GETLIST';
  var parameters = {
    CUSTOMER_NUMBER: customerId,
    SALES_ORGANIZATION: process.env.SALES_ORGANIZATION
  };

  sapRfcService.sendBAPI(bapiName, parameters, function(err, res) {
    if (err) {
      console.error('Error while getting the users...', err);
      callback(null);
      return;
    }

    callback(Order.convertResponseToOrder(res));
  });
};
