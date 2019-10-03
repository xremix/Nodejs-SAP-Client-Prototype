require('dotenv').load();
var userRepository = require('./repositories/userRepository');

userRepository.getUsers(function(users){
  console.log('Got the users: ' users);
});

userRepository.getCustomerById(function(customer){
  console.log('Got the customer: ' customer);
});
