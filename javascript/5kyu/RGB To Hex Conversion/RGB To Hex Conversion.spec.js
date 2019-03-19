const rgb = require("./RGB To Hex Conversion");

test("rgb Test", () => {
  expect(rgb(255, 255, 255)).toBe("FFFFFF");
  expect(rgb(255, 255, 300)).toBe("FFFFFF");
  expect(rgb(0, 0, 0)).toBe("000000");
  expect(rgb(148, 0, 211)).toBe("9400D3");

  expect(rgb(0, 0, -20)).toBe("000000");
  expect(rgb(300, 255, 255)).toBe("FFFFFF");
  expect(rgb(173, 255, 47)).toBe("ADFF2F");
});
