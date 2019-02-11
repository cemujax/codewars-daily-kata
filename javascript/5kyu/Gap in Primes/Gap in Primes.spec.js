const gap = require("./Gap in Primes");

test("gap Test", () => {
  expect(gap(2, 100, 110)).toEqual([101, 103]);
  expect(gap(4, 100, 110)).toEqual([103, 107]);
  expect(gap(6, 100, 110)).toEqual(null);
  expect(gap(8, 300, 400)).toEqual([359, 367]);
  expect(gap(10, 300, 400)).toEqual([337, 347]);
});
