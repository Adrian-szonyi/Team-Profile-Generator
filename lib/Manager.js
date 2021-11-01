const Employee = require('./Employee')

class Manager extends Employee {
    constructor(FullName, id, email, role, officeNumber) {
      super(FullName, id, email, 'Manager');
      this.officeNumber = officeNumber
    }
    getofficeNumber() {
    return this.officeNumber
    }
    }


const newManager = new Manager('Frank', 1422, 'Frank@gmail.com', 'Manager', 380422939)

  newManager.getrole()
    
      module.exports = Manager;