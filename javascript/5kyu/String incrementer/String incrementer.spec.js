const incrementString = require("./String incrementer");

test("incrementString Test", () => {
  expect(incrementString("foobar000")).toBe("foobar001");
  expect(incrementString("foo")).toBe("foo1");
  expect(incrementString("foobar001")).toBe("foobar002");
  expect(incrementString("foobar99")).toBe("foobar100");
  expect(incrementString("foobar099")).toBe("foobar100");
  expect(incrementString("")).toBe("1");
  expect(incrementString("1")).toBe("2");
  expect(incrementString("009")).toBe("010");
});
