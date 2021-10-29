const Manager = require('../lib/Manager');

describe("Manager class", () => {
it("Creates a new object when initialised", () => {
    const name = "Adrian";
    const id = "243"
    const email = "aszonyi49@gmail.com";
    const result = new Manager(name, id, email);

    expect(result.name).toBe(name);
    expect(result.email).toBe(email);
    expect(result.id).toBe(id);
})
it("getRole() returns Employee object", () => {
    const name = "Adrian";
    const id = "232"
    const email = "aszonyi49@gmail.com"
    const newManager = new Manager(name, id, email)
    const result = newManager.getemail();

    expect(result).toBe('aszonyi49@gmail.com');
    
});
})