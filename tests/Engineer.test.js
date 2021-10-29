
const Engineer = require('../lib/Engineer');

describe("Engineer class", () => {
it("Creates a new object when initialised", () => {
    const name = "Adrian";
    const id = "243"
    const email = "aszonyi49@gmail.com";
    const result = new Engineer(name, id, email);

    expect(result.name).toBe(name);
    expect(result.email).toBe(email);
    expect(result.id).toBe(id);
})
it("getRole() returns Employee object", () => {
    const name = "Adrian";
    const id = "232"
    const email = "aszonyi49@gmail.com"
    const employee = new Engineer(name, id, email)
    const result = employee.getemail();

    expect(result).toBe('aszonyi49@gmail.com');
});
})