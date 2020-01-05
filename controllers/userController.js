// const userRepository = require('../repositories/userRepository');
const userRepository = require('../repositories/userRepositoryMock');

exports.allUsers = function (req, res) {
  userRepository.getUsers(function(users){
    res.send(users);
  });
};
