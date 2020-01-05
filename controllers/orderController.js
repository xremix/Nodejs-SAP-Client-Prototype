const orderRepository = require('../repositories/orderRepository');
// const orderRepository = require('../repositories/orderRepositoryMock');

exports.orderByCustomerId = function(req, res) {
  orderRepository.orderByCustomer(req.params.customerId, function(orders) {
    res.send(orders);
  });
};
