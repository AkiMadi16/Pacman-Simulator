const { NullConsole } = require("@jest/console");

function placePacMan(array) {
  // var moves = ["X", "y"];
  let coordinates = array[0].match(/[0-4]+/g);
  console.log(coordinates);
  let facingDirection = array[0].substring(10);
  console.log(facingDirection);

  let validInput = /^[PLACE][0-4],[0-4],(NORTH|EAST|SOUTH|WEST)$/.test(userInput);

 
function placePacMan(userInput) {

  if (validInput) {
    let [x, y, f] = userInput.split(" ")[1].split(",").join(",");
    // ['2', '3', 'NORTH']

    let command = ""
    
    switch (command) {
      case 'MOVE':
        case 'NORTH':
          let northY = Number(y) + 1;
          y = northY < 5 ? northY : 4
          break;
          case 'EAST':
          let eastX = Number(x) + 1;
          x = eastX < 5 ? eastX : 4
          break;
          case 'SOUTH':
          let southY = Number(y) - 1;
          y = southY < 5 ? southY : 4
          break;
          case 'WEST':
          let westX = Number(x) - 1;
          x = westX < 5 ? westX : 4
          break;
    }

    case 'RIGHT': 


  }
    // if (str[i] === "LEFT" && facingDirection === direction.face) {
    //   let newCoordinates = coordinates;
    //   let newRotation = direction
    //     .filter((direct) => facingDirection === direct.face)
    //     .map((a) => Number(a.rotation[1]) - 90)
    //     .join("");
    //   if (
    //     newRotation === direction.rotation[0] ||
    //     newFace === direction.rotation[1]
    //   ) {
    //     let newFace = direction.face;
    //   }
    // }

    // if (str[i] === "RIGHT" && facingDirection === direction.face) {
    //   let newCoordinates = coordinates;
    //   let newRotation = direction
    //     .filter((direct) => facingDirection === direct.face)
    //     .map((a) => Number(a.rotation[0]) + 90)
    //     .join("");
    //   if (
    //     newRotation === direction.rotation[0] ||
    //     newFace === direction.rotation[1]
    //   ) {
    //     let newFace = direction.face;
    //   }
    // }

    if (str[i].includes("REPORT")) {
      console.log(newCoordinates);
    }
    // return "Output:" + newCoordinates + "," + newFace;
  }
  if (0 < coordinates[0] < 4 && 0 < coordinates[1] < 4) {
    return "Output:" + newCoordinates + "," + newFace;
  } else {
    return "Output: error ";
  }
}
console.log(placePacMan(["PLACE 0,0,NORTH", "MOVE", "REPORT"]));
// console.log(placePacMan(["PLACE 0,0,NORTH", "LEFT", "REPORT"]));
// console.log(
//   placePacMan(["PLACE 1,2,EAST", "MOVE", "MOVE", "LEFT", "MOVE", "REPORT"])
// );

// choosing the box and iterare through F, b0 - "PLACE, b0 value, F keys value"

//  making a class component
//like roll dice and select sides - my idea no.two to work after this

// loop through this and add conditions for left and right moves
// event listeners for all or how to get moves without each
//
module.exports = placePacMan;
