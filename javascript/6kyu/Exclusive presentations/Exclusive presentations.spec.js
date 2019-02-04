const presentationAgenda = require("./Exclusive presentations");

var friend1 = { person: "Abe", dest: ["London", "Dubai"] };
var friend2 = { person: "Bond", dest: ["Melbourne", "Dubai"] };
var friend3 = { person: "Carrie", dest: ["Melbourne"] };
var friend4 = { person: "Damu", dest: ["Melbourne", "Dubai", "Paris"] };

var agenda = presentationAgenda([friend1, friend2, friend3, friend4]);

test("Exclusive presentations 1", () => {
  expect(agenda).toEqual([
    { person: "Abe", dest: ["London"] },
    { person: "Damu", dest: ["Paris"] }
  ]);
});

test("Exclusive presentations 2", () => {
  expect(
    presentationAgenda([
      { person: "John", dest: ["Ahmedabad", "Baghdad", "Delhi", "Dhaka"] },
      {
        person: "Mickeal Angelo",
        dest: [
          "Ahmedabad",
          "Baghdad",
          "Delhi",
          "Hong Kong",
          "Istanbul",
          "Jakarta",
          "Mumbai",
          "Santiago",
          "Singapore"
        ]
      },
      { person: "Gandalf", dest: ["Chennai", "Hong Kong"] }
    ])
  ).toEqual([
    { person: "John", dest: ["Dhaka"] },
    {
      person: "Mickeal Angelo",
      dest: ["Istanbul", "Jakarta", "Mumbai", "Santiago", "Singapore"]
    },
    { person: "Gandalf", dest: ["Chennai"] }
  ]);
});
