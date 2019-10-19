class Order {
  constructor(parameters) {
    this.materialNumber = parameters.materialNumber;
  }

  static convertResponseToOrder(sapResponse){
    return sapResponse.ADDRESSDATA.map(a => new Order({
      materialNumber: a.MATERIAL,
    }));
  }
}

module.exports =  Order;
