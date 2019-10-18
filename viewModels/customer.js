class Customer {
  // This is WIP
  constructor(parameters) {
    this.id = parameters.id;
    this.name = parameters.name;
    this.country = parameters.country;
    this.zip = parameters.zip;
    this.address = parameters.address;
    this.phone = parameters.phone;
    this.fax = parameters.fax;
  }

  static convertResponseToCustomer(sapResponse){
    return sapResponse.ADDRESSDATA.map(a => new Customer({
      this.id = a.CUSTOMER;
      this.name = a.NAME;
      this.country = a.COUNTRY;
      this.zip = a.POSTL_COD1;
      this.address = a.STREET;
      this.phone = a.TEL1_NUMBR;
      this.fax = a.FAX_NUMBER;
    }));
  }
}

module.exports = Customer;
