
const Employee = require('../lib/Employee');

describe("Employee class", () => {
it("Creates a new object when initialised", () => {
    const FullName = "Adrian";
    const id = 222
    const email = "aszonyi49@gmail.com";
    const result = new Employee(FullName, id, email);

    expect(result.FullName).toBe(FullName);
    expect(result.email).toBe(email);
    expect(result.id).toBe(id);
})
it("getRole() returns Employee object", () => {
    const FullName = "Adrian";
    const id = 232
    const email = "aszonyi49@gmail.com"
    const employee = new Employee(FullName, id, email)
    const result = employee.getemail();

    expect(result).toBe('aszonyi49@gmail.com');
});
})