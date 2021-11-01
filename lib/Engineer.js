const Employee = require('./Employee')

class Engineer extends Employee {
    constructor(FullName, id, email, role, github) {
      super(FullName, id, email, 'Engineer');
      this.github = github;
      
    }
 
    getgithub() {
      return this.github
    }
}
 const newengineer = new Engineer('adrian', 132, 'aszonyi@gmail.com')
   newengineer.getname()
   newengineer.getemail()
   newengineer.getgithub()
   newengineer.getrole()

      module.exports = Engineer;
