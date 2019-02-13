const solution = require("./Split Strings");

test("solution Test", () => {
  expect(solution("abc")).toEqual(["ab", "c_"]);
  expect(solution("abcdef")).toEqual(["ab", "cd", "ef"]);
});
