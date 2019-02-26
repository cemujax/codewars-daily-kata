const digital_root = require("./Sum of Digits, Digital Root");

test("digital_root Test", () => {
  expect(digital_root(16)).toBe(7);
  expect(digital_root(456)).toBe(6);
  expect(digital_root(942)).toBe(6);
  expect(digital_root(132189)).toBe(6);
  expect(digital_root(493193)).toBe(2);
});
