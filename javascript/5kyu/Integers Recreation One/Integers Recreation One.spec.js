const listSquared = require("./Integers Recreation One");

test("listSquared Test", () => {
  expect(listSquared(1, 250)).toEqual([[1, 1], [42, 2500], [246, 84100]]);
  expect(listSquared(42, 250)).toEqual([[42, 2500], [246, 84100]]);
  expect(listSquared(250, 500)).toEqual([[287, 84100]]);
});
