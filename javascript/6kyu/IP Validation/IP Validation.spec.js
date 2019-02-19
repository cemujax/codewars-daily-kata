const isValidIP = require("./IP Validation");

test("isValidIP True Test", () => {
  expect(isValidIP("0.0.0.0")).toBeTruthy();
  expect(isValidIP("12.255.56.1")).toBeTruthy();
  expect(isValidIP("137.255.156.100")).toBeTruthy();
});

test("isValidIP False Test", () => {
  expect(isValidIP("")).toBeFalsy();
  expect(isValidIP("abc.def.ghi.jkl")).toBeFalsy();
  expect(isValidIP("123.456.789.0")).toBeFalsy();
  expect(isValidIP("12.34.56")).toBeFalsy();
  expect(isValidIP("01.02.03.04")).toBeFalsy();
  expect(isValidIP("256.1.2.3")).toBeFalsy();
  expect(isValidIP("1.2.3.4.5")).toBeFalsy();
  expect(isValidIP("123,45,67,89")).toBeFalsy();
  expect(isValidIP("1e0.1e1.1e2.2e2")).toBeFalsy();
  expect(isValidIP(" 1.2.3.4")).toBeFalsy();
  expect(isValidIP("1.2.3.4 ")).toBeFalsy();
  expect(isValidIP("12.34.56.-7")).toBeFalsy();
  expect(isValidIP("1.2.3.4\n")).toBeFalsy();
  expect(isValidIP("\n1.2.3.4")).toBeFalsy();
});
