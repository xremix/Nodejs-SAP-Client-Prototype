const customerRepository = require('../repositories/customerRepository');
// const customerRepository = require('../repositories/customerRepositoryMock');

exports.customerById = function (req, res) {
  customerRepository.getCustomerById(req.params.id, function(customers){
    res.send(customers);
  });
};

exports.customerSearch = function (req, res) {
  var query = req.query.q;
  if(!query){
    res.status(400).end();
  }else{
    customerRepository.searchCustomerById(query, function(customers){
      res.send(customers);
    });
  }

};
