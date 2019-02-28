const iqTest = require("./IQ Test");

test("iqTest Test", () => {
  expect(iqTest("2 4 7 8 10")).toBe(3);
  expect(iqTest("1 2 1 1")).toBe(2);
  expect(iqTest("1 2 2")).toBe(1);
});
