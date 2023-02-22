function placePacMan(userInput) {
  let validInput = /^(PLACE)[0-4],[0-4],(NORTH|EAST|SOUTH|WEST)$/.test(
    userInput[0]
  );
  let directions = ["NORTH", "EAST", "SOUTH", "WEST"];
  let [X, Y, F] = userInput[0].split(" ")[1].split(",");

  if (validInput) {
    // ['2', '3', 'NORTH']

    for (let i = 1; i <= userInput.length; i++) {
      let command = "userInput[i]";

      switch (command) {
        case "MOVE":
          switch (F) {
            case "NORTH":
              let northY = Number(Y) + 1;
              Y = northY < 5 ? northY : 4;
              break;
            case "EAST":
              let eastX = Number(X) + 1;
              X = eastX < 5 ? eastX : 4;
              break;
            case "SOUTH":
              let southY = Number(Y) - 1;
              Y = southY < 5 ? southY : 4;
              break;
            case "WEST":
              let westX = Number(X) - 1;
              X = westX < 5 ? westX : 4;
              break;
          }
          break;
        case "RIGHT":
          F = directions[(directions.indexOf(F) + 1) % directions.length];
          break;
        case "LEFT":
          F = directions.at(directions.indexOf(F) - 1);
          break;
      }
    }
  }
  return `Output: ${X}, ${Y}, ${F}`;
}

//   }
//   if (0 < coordinates[0] < 4 && 0 < coordinates[1] < 4) {
//     return "Output:" + newCoordinates + "," + newFace;
//   } else {
//     return "Output: error ";
//   }
// }
console.log(placePacMan(["PLACE 0,0,NORTH", "MOVE", "REPORT"]));
console.log(placePacMan(["PLACE 0,0,NORTH", "LEFT", "REPORT"]));
console.log(
  placePacMan(["PLACE 1,2,EAST", "MOVE", "MOVE", "LEFT", "MOVE", "REPORT"])
);

// choosing the box and iterare through F, b0 - "PLACE, b0 value, F keys value"

//  making a class component
//like roll dice and select sides - my idea no.two to work after this

// loop through this and add conditions for left and right moves
// event listeners for all or how to get moves without each
//
module.exports = placePacMan;
