const validParentheses = require("./Valid Parentheses");

test("validParentheses True Case Test ", () => {
  expect(validParentheses("()")).toBeTruthy();
  expect(validParentheses("(())((()())())")).toBeTruthy();
});

test("validParentheses False Case Test ", () => {
  expect(validParentheses("())")).toBeFalsy();
  expect(validParentheses(")(()))")).toBeFalsy();
  expect(validParentheses("()(())))")).toBeFalsy();
});
