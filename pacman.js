var pacMan = "🥷🏼";
var placeCommandButton = document.querySelector("#place");
var leftCommand = document.querySelector("#rotateLeft");
var rightCommand = document.querySelector("#rotateRight");
var moveCommand = document.querySelector("#move");
var reportCommand = document.querySelector("#report");
var placeUserInput = document.querySelector("#placePacMan");
var showCurrentLocation = document.querySelector("#currentLocation");

// placeCommandButton.addEventListener("click", function (event) {
//   let box = event.target;
//   console.log(box.textContent);
//   // document.querySelector("#b21").textContent = "";

//   var userInput = "PLACE X,Y,F";
//   var coordinates = {
//     b0: "0,4",
//     b1: "1,4",
//     b2: "2,4",
//     b3: "3,4",
//     b4: "4,4",
//     b5: "0,3",
//     b6: "1,3",
//     b7: "2,3",
//     b8: "3,3",
//     b9: "4,3",
//     b10: "0,2",
//     b11: "1,2",
//     b12: "2,2",
//     b13: "3,2",
//     b14: "4,2",
//     b15: "0,1",
//     b16: "1,1",
//     b17: "2,1",
//     b18: "3,1",
//     b19: "4,1",
//     b20: "0,0",
//     b21: "1,0",
//     b22: "2,0",
//     b23: "3,0",
//     b24: "4,0",
//   };

//   coordinates.

//   if (placeUserInput.includes("cordinates")) {
//     document.querySelector(".box").textContent = pacMan;
//   }
//   if (placeUserInput.includes("face")) {
//     Rotate
//   }
// });

// moveCommand.addEventListener("click", function(event) {
//   let box = event.target;
//   document.querySelector("b20").textContent =
// })

// rightCommand.addEventListener("click", function (event) {
//   let box = event.target;
//   console.log(box);
//   document.querySelector("#b20").textContent = "";
//   document.querySelector("#b21").textContent = inputCommand;
// });

// if ((document.querySelector(".box").textContent = inputCommand)) {
//   leftCommand.addEventListener("click", function (event) {
//     let box = event.target;
//     console.log(box);
//     document.querySelector(".box").textContent = "";
//     document.querySelector(".box").textContent = inputCommand;
//   });
// }

function placePacMan(array) {
  var arrayOfInput = array[0].split(" ");
  // ['PLACE', '0,1,NORTH']
  var coordinates = arrayOfInput[1].substring(0, 3);
  var facingDirection = arrayOfInput[1].split(",")[2];
  // ['0', '1', 'NORTH'] to avoid this

  var direction = [
    {
      face: "NORTH",
      rotation: ["0", "360"],
    },
    { face: "EAST", rotation: ["90", "90"] },
    { face: "SOUTH", rotation: ["180", "180"] },
    { face: "WEST", rotation: ["270", "270"] },
  ];

  var board = [
    {
      b0: "0,4",
      b1: "1,4",
      b2: "2,4",
      b3: "3,4",
      b4: "4,4",
      b5: "0,3",
      b6: "1,3",
      b7: "2,3",
      b8: "3,3",
      b9: "4,3",
      b10: "0,2",
      b11: "1,2",
      b12: "2,2",
      b13: "3,2",
      b14: "4,2",
      b15: "0,1",
      b16: "1,1",
      b17: "2,1",
      b18: "3,1",
      b19: "4,1",
      b20: "0,0",
      b21: "1,0",
      b22: "2,0",
      b23: "3,0",
      b24: "4,0",
    },
  ];

  const location = board.filter((x, y) => {
    coordinates.includes(x[y]);
    console.log(board[y]);
  });

  const turn = direction
    .filter((direct) => direct.face === facingDirection)
    .map((direct) => direct.rotation)
    .join("");

  if (array[1] === "MOVE" || array[1] === "LEFT" || array[1] === "RIGHT") {
    var newCoordinates = board[0]["b" + (board[x][1] + board[x][2] - 5)];
    var newFace = facingDirection;
  }

  if (array[1] === "LEFT") {
    var newCoordinates = location;
    var newFace = direction
      .filter((direct) => direct.rotation[1] - 90)
      .map((direct) => direct.face)
      .join("");
  }

  if (array[1] === "RIGHT") {
    var newCoordinates = location;
    var newFace = direction
      .filter((direct) => direct.rotation === direct.rotation[0] + 90)
      .map((direct) => direct.face)
      .join("");
  }

  if (array[2] === "MOVE" || array[2] === "LEFT" || array[2] === "RIGHT") {
  }

  if (array.join(",").endsWith("REPORT")) {
    console.log(newCoordinates);
  }

  return "Output:" + newCoordinates + "," + newFace;
}
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
