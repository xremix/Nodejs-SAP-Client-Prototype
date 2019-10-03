require('dotenv').load();
var userRepository = require('./repositories/userRepository');

userRepository.getUsers(function(users){
  console.log('Got the users: ' users);
});
