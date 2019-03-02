const songDecoder = require("./Dubstep");

test("songDecoder Test", () => {
  expect(songDecoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB")).toBe(
    "WE ARE THE CHAMPIONS MY FRIEND"
  );
  expect(songDecoder("AWUBBWUBC")).toBe("A B C");
  expect(songDecoder("AWUBWUBWUBBWUBWUBWUBC")).toBe("A B C");
  expect(songDecoder("WUBAWUBBWUBCWUB")).toBe("A B C");
});
