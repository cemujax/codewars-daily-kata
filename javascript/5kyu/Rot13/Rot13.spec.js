const rot13 = require("./Rot13");

test("rot13 Test", () => {
  expect(rot13("test")).toBe("grfg");
  expect(rot13("Test")).toBe("Grfg");
  expect(rot13("kx0ui")).toBe("xk0hv");
});
