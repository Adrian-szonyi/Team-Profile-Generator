
const Engineer = require('../lib/Engineer');

describe("Engineer class", () => {
it("Creates a new object when initialised", () => {
    const FullName = "Adrian";
    const id = 223
    const email = "aszonyi49@gmail.com";
    const github = "huuhhhuhhhuuh"
    const role = 'Engineer'
    const result = new Engineer(FullName, id, email, role, github);

    expect(result.FullName).toBe(FullName);
    expect(result.email).toBe(email);
    expect(result.id).toBe(id);
    expect(result.github).toBe(github);
})

});