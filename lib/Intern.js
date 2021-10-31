const Employee = require('./Employee')

class Intern extends Employee {
    constructor(school) {
      super(FullName, id, email, 'Intern');
      this.school = school;
    }

    getschool() {
      return this.school;
    }
}
const newintern = new Intern('alex', 141, 'aszonyi@hotmail.com', 'intern', 'Oxford')
newintern.getrole()
newintern.getschool()
newintern.printInfo()
      console.log(`This Employee has an id of ${this.id}`);
    
  
