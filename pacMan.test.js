const placePacMan = require("./pacman.js");

test("check user input and rotation to place pacman", () => {
  expect(placePacMan(["PLACE 0,0,NORTH", "MOVE", "REPORT"])).toEQual(
    "Output: 0,1,NORTH"
  ),
    expect(placePacMan(["PLACE 0,0,LEFT", "REPORT"])).toEQual(
      "Output: 0,0,WEST"
    ),
    expect(
      placePacMan(["PLACE 0,0,MOVE", "MOVE", "LEFT", "MOVE", "REPORT"])
    ).toEQual("Output: 3,3,NORTH ");
});
