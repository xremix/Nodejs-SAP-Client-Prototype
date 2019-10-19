const orderRepository = require('../repositories/orderRepository');

exports.orderByCustomerId = function(req, res) {
  orderRepository.orderByCustomer(req.params.customerId, function(orders) {
    res.send(orders);
  });
};
