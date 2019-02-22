const removeNb = require("./Is my friend cheating");

test("removeNb Test", () => {
  expect(removeNb(26)).toEqual([[15, 21], [21, 15]]);
  expect(removeNb(100)).toEqual([]);
});

test("removeNb High Number Test", () => {
  const arr = [
    [550320, 908566],
    [559756, 893250],
    [893250, 559756],
    [908566, 550320]
  ];
  expect(removeNb(1000003)).toEqual(arr);
  expect(removeNb(3000010)).toEqual([]);
});
