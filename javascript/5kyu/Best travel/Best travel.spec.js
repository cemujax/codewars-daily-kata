const chooseBestSum = require("./Best travel");

test("chooseBestSum Test", () => {
  expect(chooseBestSum(163, 3, [50, 55, 56, 57, 58])).toBe(163);
  expect(chooseBestSum(230, 3, [91, 74, 73, 85, 73, 81, 87])).toBe(228);
});

test("chooseBestSum Test null", () => {
  expect(chooseBestSum(163, 3, [50])).toEqual(null);
  expect(chooseBestSum(331, 5, [91, 74, 73, 85, 73, 81, 87])).toEqual(null);
});
