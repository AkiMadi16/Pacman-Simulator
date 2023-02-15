const placePacMan = require("./pacman_test.js");

test("check user input and rotation to place pacman", () => {
  expect(placePacMan(["PLACE 0,0,NORTH", "MOVE", "REPORT"])).toEqual(
    "Output: 0,1,NORTH"
  );
  // expect(placePacMan(["PLACE 0,0,NORTH", "LEFT", "REPORT"])).toEqual(
  //   "Output: 0,0,WEST"
  // );
  // expect(
  //   placePacMan(["PLACE 0,0,MOVE", "MOVE", "LEFT", "MOVE", "REPORT"])
  // ).toEqual("Output: 3,3,NORTH ");
});
