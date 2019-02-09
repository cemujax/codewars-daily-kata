const validPhoneNumber = require("./Valid Phone Number");

test("validPhoneNumber Test True", () => {
  expect(validPhoneNumber("(123) 456-7890")).toBeTruthy();
});

test("validPhoneNumber Test False", () => {
  expect(validPhoneNumber("(1111)555 2345")).toBeFalsy();
  expect(validPhoneNumber("(098) 123 4567")).toBeFalsy();
});
