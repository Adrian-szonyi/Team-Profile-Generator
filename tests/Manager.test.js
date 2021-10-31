const Manager = require('../lib/Manager');

describe("Manager class", () => {
it("Creates a new object when initialised", () => {
    const FullName = "Adrian";
    const id = "243"
    const email = "aszonyi49@gmail.com";
    const result = new Manager(FullName, id, email);

    expect(result.FullName).toBe(FullName);
    expect(result.email).toBe(email);
    expect(result.id).toBe(id);
})
it("getRole() returns Employee object", () => {
    const FullName = "Adrian";
    const id = "232"
    const email = "aszonyi49@gmail.com"
    const newManager = new Manager(FullName, id, email)
    const result = newManager.getemail();

    expect(result).toBe('aszonyi49@gmail.com');
    
});
})