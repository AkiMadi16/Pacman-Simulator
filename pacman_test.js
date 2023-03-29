function placePacMan(userInput) {
  // console.log(userInput);

  // check for a valid input as well

  if (userInput[0].startsWith("PLACE")) {
    const directions = ["NORTH", "EAST", "SOUTH", "WEST"];
    let [X, Y, F] = userInput[0].split(" ")[1].split(",");
    // ['2', '3', 'NORTH']

    for (let i = 1; i < userInput.length; i++) {
      const command = userInput[i];
      // console.log(userInput[i]);

      switch (command) {
        case "MOVE":
          switch (F) {
            case "NORTH":
              let northY = parseInt(Y) + 1;
              Y = northY < 5 ? northY : 4;
              break;
            case "EAST":
              let eastX = parseInt(X) + 1;
              X = eastX < 5 ? eastX : 4;
              break;
            case "SOUTH":
              let southY = parseInt(Y) - 1;
              Y = southY > -1 ? southY : 0;
              break;
            case "WEST":
              let westX = parseInt(X) - 1;
              X = westX > -1 ? westX : 0;
              break;
          }
          break; // add break to exit the inner switch statement
        case "RIGHT":
          F = directions[(directions.indexOf(F) + 1) % directions.length];
          break;
        case "LEFT":
          // F = directions[(directions.indexOf(F) + 3) % directions.length];
          F = directions.at(directions.indexOf(F) - 1);
          break;

        case "REPORT":
          return `Output: ${X},${Y},${F}`;
      }
    }
  }
  // handle the case when report is not found
  // return `Output: ${X}, ${Y}, ${F}`;
  return " Output: PacMan is not placed";
}

console.log(placePacMan(["PLACE 0,0,NORTH", "MOVE", "REPORT"]));
console.log(placePacMan(["PLACE 0,0,NORTH", "LEFT", "REPORT"]));
console.log(
  placePacMan(["PLACE 1,2,EAST", "MOVE", "MOVE", "LEFT", "MOVE", "REPORT"])
);
// console.log(
//   placePacMan(["1,2,EAST", "MOVE", "MOVE", "LEFT", "MOVE", "REPORT"])
// );
// console.log(
//   placePacMan([
//     "PLACE 1,2,EAST",
//     "RIGHT",
//     "MOVE",
//     "LEFT",
//     "MOVE",
//     "LEFT",
//     "REPORT",
//   ])
//  Output: PacMan is not placed
//Output: 2, 1, NORTH

module.exports = placePacMan;
