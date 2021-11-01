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
printinfo() {
  return this.role
}

  
 
  }
  
  module.exports = Employee;