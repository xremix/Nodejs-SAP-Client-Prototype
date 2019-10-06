var User = require('../viewModels/user');

exports.getUsers = function(callback){
    // TODO double check which data comes back and convert to viewmodels
    var users =[new User({
      id: 1,
      name: 'Peter'
    }),new User({
      id: 2,
      name: 'Hans'
    })];
    callback(users);
};
