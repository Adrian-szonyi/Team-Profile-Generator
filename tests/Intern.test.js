const Intern = require('../lib/Intern');

describe("Engineer class", () => {
it("Creates a new object when initialised", () => {
    const name = "Adrian";
    const id = "243"
    const email = "aszonyi49@gmail.com";
    const result = new Intern(name, id, email);

    expect(result.name).toBe(name);
    expect(result.email).toBe(email);
    expect(result.id).toBe(id);
})
it("getRole() returns Employee object", () => {
    const name = "Adrian";
    const id = "232"
    const email = "aszonyi49@gmail.com"
    const employee = new Intern(name, id, email)
    const result = employee.getemail();

    expect(result).toBe('aszonyi49@gmail.com');
});
})