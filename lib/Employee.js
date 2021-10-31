class Employee {
    constructor(FullName, id, email, role) {
      this.FullName = FullName;
      this.id = id;
      this.email = email;
      this.role = role;
    }

    getname() {
      return this.FullName;
    }
    getemail() {
      return this.email;
    }
    getid() {
      return this.id;
    }
    getrole() {
      return this.role
    }

    
  
    printInfo() {
      console.log(`This Employee has an id of ${this.id}`);
    }
  }
  module.exports = Employee;