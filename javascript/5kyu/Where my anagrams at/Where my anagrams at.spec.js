const anagrams = require("./Where my anagrams at");

test("anagrams Test", () => {
  expect(anagrams("abba", ["aabb", "abcd", "bbaa", "dada"])).toEqual([
    "aabb",
    "bbaa"
  ]);

  expect(
    anagrams("racer", ["crazer", "carer", "racar", "caers", "racer"])
  ).toEqual(["carer", "racer"]);

  expect(anagrams("laser", ["lazing", "lazy", "lacer"])).toEqual([]);
});
