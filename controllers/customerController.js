// const customerRepository = require('../repositories/customerRepository');
const customerRepository = require('../repositories/customerRepositoryMock');

exports.customerById = function (req, res) {
  customerRepository.getCustomerById(req.params.id, function(customers){
    res.send(customers);
  });
};

exports.customerSearch = function (req, res) {
  customerRepository.searchCustomerById(req.params.q, function(customers){
    res.send(customers);
  });
};
