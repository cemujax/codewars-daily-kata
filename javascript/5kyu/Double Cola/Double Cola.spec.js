const whoIsNext = require("./Double Cola");

test("whoIsNext Test", () => {
  expect(
    whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 1)
  ).toBe("Sheldon");
  expect(
    whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 52)
  ).toBe("Penny");
  expect(
    whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 7230702951)
  ).toBe("Leonard");
});
