class User {
  // This is WIP
  constructor(parameters) {
    this.name = parameters.name;
    this.username = parameters.username;
  }
  
  static convertResponseToUser(sapResponse){
    // This is WIP
    return new User({
      name: sapResponse.name
    });
  }
}
