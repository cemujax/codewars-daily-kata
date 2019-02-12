const toCamelCase = require("./Convert string to camel case");

test("toCamelCase Test", () => {
  expect(toCamelCase("the-stealth-warrior")).toBe("theStealthWarrior");
  expect(toCamelCase("The_Stealth_Warrior")).toBe("TheStealthWarrior");
  expect(toCamelCase("A-B-C")).toBe("ABC");
  expect(toCamelCase("")).toBe("");
});
