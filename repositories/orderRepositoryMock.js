exports.orderByCustomer = function(customerId, callback) {
  callback(
    [{
      "orderId": "0001234567",
      "products": [{
        "id": "000010",
        "materialNumber": "PR-1234DS",
        "description": "Screwdriver 13mm"
      }, {
        "id": "000020",
        "materialNumber": "PR-4321SD",
        "description": "Driverscrew 31mm"
      }]
    }, {
      "orderId": "0001234567",
      "products": [{
        "id": "000010",
        "materialNumber": "PR-1234DS",
        "description": "Screwdriver 13mm"
      }]
    }]
  );
};
