class Customer {
  // This is WIP
  constructor(parameters) {
    this.name = parameters.name;
    this.id = parameters.id;
    this.username = parameters.username;
  }

  static convertResponseToCustomer(sapResponse){
    return sapResponse.ADDRESSDATA.map(a => new Customer({
      id: a.CUSTOMER,
      name: a.NAME
    }));
  }
}

module.exports = Customer;
