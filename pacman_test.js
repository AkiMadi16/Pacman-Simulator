function placePacMan(userInput) {
  console.log(userInput);
  // let validInput = /^(PLACE)[0-4],[0-4],(NORTH|EAST|SOUTH|WEST)$/.test(
  //   userInput[0]
  // );
  // console.log(validInput);
  let directions = ["NORTH", "EAST", "SOUTH", "WEST"];
  let [X, Y, F] = userInput[0].split(" ")[1].split(",");

  if (userInput) {
    // ['2', '3', 'NORTH']

    for (let i = 1; i <= userInput.length; i++) {
      let command = "userInput[i]";
      console.log(userInput[i]);

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
              Y = southY > 0 ? southY : 0;
              break;
            case "WEST":
              let westX = parseInt(X) - 1;
              X = westX > 0 ? westX : 0;
              break;
          }
        case "RIGHT":
          F = directions[(directions.indexOf(F) + 1) % directions.length];
          break;
        case "LEFT":
          F = directions.at(directions.indexOf(F) - 1);
          break;
        case "default":
          console.log("error");
          break;
      }
    }
    return `Output: ${X}, ${Y}, ${F}`;
  }
  // return `Output: ${X}, ${Y}, ${F}`;
}

console.log(placePacMan(["PLACE 0,0,NORTH", "MOVE", "REPORT"]));
console.log(placePacMan(["PLACE 0,0,NORTH", "LEFT", "REPORT"]));
console.log(
  placePacMan(["PLACE 1,2,EAST", "MOVE", "MOVE", "LEFT", "MOVE", "REPORT"])
);

module.exports = placePacMan;
