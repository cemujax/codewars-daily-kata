const duplicateEncode = require("./Duplicate Encoder");

test("duplicateEncode Test", () => {
  expect(duplicateEncode("din")).toBe("(((");
  expect(duplicateEncode("recede")).toBe("()()()");
  expect(duplicateEncode("Success")).toBe(")())())");
  expect(duplicateEncode("(( @")).toBe("))((");
});
