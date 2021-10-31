const Manager = require('../lib/Manager');

describe("Manager class", () => {
it("Creates a new object when initialised", () => {
    const FullName = "Adrian";
    const id = 2521
    const email = "aszonyi49@gmail.com";
    const role = "Manager"
    const officeNumber = 74974795
    const newManager = new Manager(FullName, id, email, role, officeNumber);

    expect(newManager.FullName).toBe(FullName);
    expect(newManager.email).toBe(email);
    expect(newManager.id).toBe(id);
})
it("getRole() returns Employee object", () => {
    const FullName = "Adrian";
    const id = 232
    const email = "aszonyi49@gmail.com"
    const role = "Manager"
    const officeNumber = 74974795
    const newManager = new Manager(FullName, id, email, role, officeNumber)
    const result = newManager.getemail();

    expect(result).toBe('aszonyi49@gmail.com');
    
});
})