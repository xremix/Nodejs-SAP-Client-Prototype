var User = require('../viewModels/user');

exports.getUsers = function(callback){
    var users =[new User({
      id: 1,
      name: 'Peter'
    }),new User({
      id: 2,
      name: 'Hans'
    })];
    callback(users);
};
