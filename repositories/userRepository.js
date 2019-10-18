var sapRfcService = require('../services/sapRfcService');
var User = require('../viewModels/user');
sapRfcService.initByEnvironment();

/**
* Get's all the users
* @param {function}      callback         Callback that get's the user model passed
*/
exports.getUsers = function(callback){
  // Docs: https://www.se80.co.uk/sapfms/b/bapi/bapi_user_getlist.htm
  // DOCS for SELECTION_RANGE / bapiussrge:  https://www.sapdatasheet.org/abap/tabl/bapiussrge.html

  var bapiName = 'BAPI_USER_GETLIST';
  var parameters = {
    MAXROWS: 3,
    SELECTION_RANGE: [{
      PARAMETER: "USERNAME",
      SIGN:      "I",
      OPTION:    "CP",
      LOW:       "A*"
    }]
  };

  sapRfcService.sendBAPI(bapiName, parameters, function(err, res){
    if (err) {
      console.error('Error while getting the users...', err);
      callback(null);
      return;
    }

    callback(res);
    // TODO double check which data comes back and convert to viewmodels
    // var user = User.convertResponseToUser(res);
    // callback(user);
  });

};
