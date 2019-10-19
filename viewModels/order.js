var _ = require('lodash');

class Order {
  constructor(parameters) {
    this.id = parameters.id;
    this.materialNumber = parameters.materialNumber;
    this.description = parameters.description;
  }

  static convertResponseToOrder(sapResponse){
    var mappedData = _.chain(sapResponse.SALES_ORDERS)
    .groupBy("SD_DOC")
    .map((value, key) => ({
      orderId: key,
      creationDate: _.head(value).CREATION_DATE,
      products: value.map(function(v, k){
        return {
          id: v.ITM_NUMBER,
          materialNumber: v.MATERIAL,
          description: v.SHORT_TEXT,
        }
      })
    }))
    .value();
    return mappedData;
  }
}

module.exports =  Order;
