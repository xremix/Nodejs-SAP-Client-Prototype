var Customer = require('../viewModels/customer');

function getMockResponse(customerEntries) {
  var mockResponse = {
    "RETURN": {
      "TYPE": "",
      "ID": "",
      "NUMBER": "000",
      "MESSAGE": "",
      "LOG_NO": "",
      "LOG_MSG_NO": "000000",
      "MESSAGE_V1": "",
      "MESSAGE_V2": "",
      "MESSAGE_V3": "",
      "MESSAGE_V4": ""
    },
    "CPDONLY": "",
    "MAXROWS": 3,
    "ADDRESSDATA": customerEntries,
    "IDRANGE": [{
      "SIGN": "I",
      "OPTION": "EQ",
      "LOW": "1000012345",
      "HIGH": ""
    }],
    "SPECIALDATA": [{
      "CUSTOMER": "1000012345",
      "ACC_1_TIME": ""
    }]
  };
  return mockResponse;
}

exports.searchCustomerById = function(query, callback) {
  var customers = Customer.convertResponseToCustomer(getMockResponse([{
    "CUSTOMER": "1000012345",
    "SORT1": "123",
    "NAME": "Bauhans GmbH",
    "COUNTRY": "DE",
    "COUNTRYISO": "DE",
    "CITY": "Musterhausen",
    "POSTL_COD1": "81234",
    "REGION": "12",
    "STREET": "Musterstraße 1a",
    "TEL1_NUMBR": "+4912345678",
    "FAX_NUMBER": "+4912345679",
    "ADDRESS": "0000123456"
  }, {
    "CUSTOMER": "1000012346",
    "SORT1": "123",
    "NAME": "Soundhead GmbH",
    "COUNTRY": "DE",
    "COUNTRYISO": "DE",
    "CITY": "Musterhausen",
    "POSTL_COD1": "81234",
    "REGION": "12",
    "STREET": "Musterstraße 1b",
    "TEL1_NUMBR": "+4987654321",
    "FAX_NUMBER": "+4987654320",
    "ADDRESS": "0000123456"
  }]));
  callback(customers);
};

exports.getCustomerById = function(id, callback) {
  var customer = Customer.convertResponseToCustomer(getMockResponse([{
    "CUSTOMER": "1000012345",
    "SORT1": "123",
    "NAME": "MyCustomer",
    "COUNTRY": "DE",
    "COUNTRYISO": "DE",
    "CITY": "München",
    "POSTL_COD1": "80331",
    "REGION": "12",
    "STREET": "Sonnenstraße 8",
    "TEL1_NUMBR": "089 / 1234 - 0",
    "FAX_NUMBER": "089 / 1234567",
    "ADDRESS": "0000123456"
  }]));
  callback(customer);
};
