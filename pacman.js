var pacMan = "🥷🏼";
var placeCommandButton = document.querySelector("#place");
var leftCommand = document.querySelector("#rotateLeft");
var rightCommand = document.querySelector("#rotateRight");
var moveCommand = document.querySelector("#move");
var reportCommand = document.querySelector("#report");
var placeUserInput = document.querySelector("#placePacMan");
var showCurrentLocation = document.querySelector("#currentLocation");

placeCommandButton.addEventListener("click", function (event) {
  let box = event.target;
  console.log(box.textContent);
  // document.querySelector("#b21").textContent = "";

  var userInput = "PLACE X,Y,F";
  var coordinates = {
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
  };

  coordinates.

  if (placeUserInput.includes("cordinates")) {
    document.querySelector(".box").textContent = pacMan;
  }
  if (placeUserInput.includes("face")) {
    Rotate
  }
});

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

// loop through this and add conditions for left and right moves
// event listeners for all or how to get moves without each
//

function placePacMan() {
  var face = {
    NORTH: "0 deg",
    EAST: "90 deg",
    SOUTH: "180 deg",
    WEST: "270 deg",
  };

  var coordinates = {
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
  };
}
console.log(placePacMan("PLACE", "box", "F"));

// choosing the box and iterare through F, b0 - "PLACE, b0 value, F keys value"
