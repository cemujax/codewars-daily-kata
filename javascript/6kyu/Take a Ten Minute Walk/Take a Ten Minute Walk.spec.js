const isValidWalk = require("./Take a Ten Minute Walk");

test("isValidWalk Test", () => {
  expect(
    isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"])
  ).toBeTruthy();
  expect(
    isValidWalk(["w", "e", "w", "e", "w", "e", "w", "e", "w", "e", "w", "e"])
  ).toBeFalsy();
  expect(isValidWalk(["w"])).toBeFalsy();
  expect(
    isValidWalk(["n", "n", "n", "s", "n", "s", "n", "s", "n", "s"])
  ).toBeFalsy();
});
