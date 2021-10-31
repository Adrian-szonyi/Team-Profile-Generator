const Intern = require('../lib/Intern');

describe("Intern class", () => {
it("Creates a new object when initialised", () => {

    const FullName = "Adrian";
    const id = 252
    const email = "aszonyi49@gmail.com";
    const school = 'Oxford'
    const role = 'Intern'
    const newintern = new Intern(FullName, id, email, role, school);
    expect(newintern.school).toBe('Oxford');
})
// it("getRole() returns Employee object", () => {
//     const name = "Adrian";
//     const id = "232"
//     const email = "aszonyi49@gmail.com"
//     const employee = new Intern(name, id, email)
//     const result = employee.getemail();

//     expect(result).toBe('aszonyi49@gmail.com');
// });
})