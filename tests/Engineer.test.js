
const Engineer = require('../lib/Engineer');

describe("Engineer class", () => {
it("Creates a new object when initialised", () => {
    const FullName = "Adrian";
    const id = "243"
    const email = "aszonyi49@gmail.com";
    const github = "huuhhhuhhhuuh"
    const result = new Engineer(github);

    expect(result.FullName).toBe(FullName);
    expect(result.email).toBe(email);
    expect(result.id).toBe(id);
    expect(result.github).toBe(github);
})
it("getRole() returns Employee object", () => {
    const email = "aszonyi49@gmail.com"
    const employee = new Engineer(github)
    const result = employee.getemail();

    expect(result).toBe('aszonyi49@gmail.com');
});
})