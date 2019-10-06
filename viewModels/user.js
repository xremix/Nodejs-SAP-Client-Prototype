class User {
  // This is WIP
  constructor(parameters) {
    this.name = parameters.name;
    this.id = parameters.id;
    this.username = parameters.username;
  }

  static convertResponseToUser(sapResponse){
    // This is WIP
    return new User({
      id: sapResponse.id,
      name: sapResponse.name
    });
  }
}

module.exports = User;
