const pickPeaks = require("./Pick peaks");

test("pickPeaks Test", () => {
  expect(pickPeaks([3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 3])).toEqual({
    pos: [3, 7],
    peaks: [6, 3]
  });
  expect(pickPeaks([3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 2, 2, 1])).toEqual({
    pos: [3, 7, 10],
    peaks: [6, 3, 2]
  });
  expect(pickPeaks([2, 1, 3, 1, 2, 2, 2, 2, 1])).toEqual({
    pos: [2, 4],
    peaks: [3, 2]
  });
});
