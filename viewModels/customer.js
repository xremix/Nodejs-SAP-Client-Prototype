class Customer {
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
      id: a.CUSTOMER,
      name: a.NAME,
      country: a.COUNTRY,
      zip: a.POSTL_COD1,
      address: a.STREET,
      phone: a.TEL1_NUMBR,
      fax: a.FAX_NUMBER,
    }));
  }
}

module.exports = Customer;
