const findOutlier = require("./Find The Parity Outlier");

test("findOutlier Test", () => {
  expect(findOutlier([0, 1, 2])).toBe(1);
  expect(findOutlier([1, 2, 3])).toBe(2);
  expect(findOutlier([2, 6, 8, 10, 3])).toBe(3);
  expect(findOutlier([0, 0, 3, 0, 0])).toBe(3);
  expect(findOutlier([1, 1, 0, 1, 1])).toBe(0);
});
