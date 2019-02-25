const digPow = require("./Playing with digits");

test("digPow Test", () => {
  expect(digPow(89, 1)).toBe(1);
  expect(digPow(92, 1)).toBe(-1);
  expect(digPow(695, 2)).toBe(2);
  expect(digPow(46288, 3)).toBe(51);
});
