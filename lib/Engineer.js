class Engineer {
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;

    }

    getname() {
      return this.name;
    }
    getemail() {
      return this.email;
    }
    getid() {
      return this.id;
    }
  
    printInfo() {
      console.log(`This Employee is called ${this.name} `);
      console.log(`This Employee has an id of ${this.id}`);
    }
  }
  module.exports = Engineer;