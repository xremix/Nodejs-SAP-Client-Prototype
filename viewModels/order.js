class Order {
  constructor(parameters) {
    this.id = parameters.id;
    this.materialNumber = parameters.materialNumber;
    this.description = parameters.description;
  }

  static convertResponseToOrder(sapResponse){
    return sapResponse.SALES_ORDERS.map(a => new Order({
      id: a.ITM_NUMBER,
      materialNumber: a.MATERIAL,
      description: a.SHORT_TEXT,
    }));
  }
}

module.exports =  Order;
