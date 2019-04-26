const zeros = require("./Number of trailing zeros of N!");

test("zeros Test", () => {
  expect(zeros(0)).toBe(0);
  expect(zeros(6)).toBe(1);
  expect(zeros(12)).toBe(2);
  expect(zeros(30)).toBe(7);
});
