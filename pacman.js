var pacMan = "🥷🏼";
var placeCommandButton = document.querySelector("#place");
var leftCommand = document.querySelector("#rotateLeft");
var rightCommand = document.querySelector("#rotateRight");
var moveCommand = document.querySelector("#move");
var reportCommand = document.querySelector("#report");
var placeUserInput = document.querySelector("#placePacMan");
var showCurrentLocation = document.querySelector("#currentLocation");
var box = document.querySelector(".box");

var placeX, placeY, placeF;

var directions = [
  {
    face: "NORTH",
    angle: "0deg",
  },
  { face: "EAST", angle: "90deg" },
  { face: "SOUTH", angle: "180deg" },
  { face: "WEST", angle: "270deg" },
];
var facingDirection = directions
  .filter((a) => a.face === placeF)
  .map((b) => b.angle);

placeCommandButton.addEventListener("click", function (event) {
  if (placeX !== undefined && placeY !== undefined && placeF !== undefined) {
    document.querySelector(
      `#x${placeX}y${placeY}`
    ).textContent = `${placeX},${placeY}`;

    document.querySelector(
      `#x${placeX}y${placeY}`
    ).style.transform = `rotate(${facingDirection})`;
  }

  let userInput = placeUserInput.value;
  let coordinates = userInput.match(/[0-4]+/g);
  let facingDirection = userInput
    .substring(userInput.length - 5)
    .match(/(NORTH|EAST|SOUTH|WEST)/g)[0];

  placeX = Number(coordinates[0]);
  placeY = Number(coordinates[1]);
  placeF = facingDirection;

  let coordinatesOfBox = `x${placeX}y${placeY}`;
  // console.log(coordinatesOfBox);
  let box = document.querySelector(`#${coordinatesOfBox}`);
  box.textContent = pacMan;
});

moveCommand.addEventListener("click", function (event) {
  event.preventDefault();
  document.querySelector(
    `#x${placeX}y${placeY}`
  ).textContent = `${placeX},${placeY}`;

  if (placeF === "NORTH") {
    placeY = placeY + 1;
    box.style.transform = `rotate(0deg)`;
  }

  if (placeF === "EAST") {
    placeX = placeX + 1;
    box.style.transform = `rotate(90deg)`;
  }
  if (placeF === "SOUTH") {
    placeY = placeY - 1;
    box.style.transform = `rotate(180deg)`;
  }
  if (placeF === "WEST") {
    placeX = placeX - 1;
    box.style.transform = `rotate(270deg)`;
  }

  placeX = placeX > 4 ? 4 : placeX;
  placeX = placeX < 0 ? 0 : placeX;
  placeY = placeY > 4 ? 4 : placeY;
  placeY = placeY < 0 ? 0 : placeY;

  let newCoordinates = `x${placeX}y${placeY}`;
  let newBox = document.querySelector(`#${newCoordinates}`);
  newBox.textContent = pacMan;
});

let boxes = document.querySelector(".box");
rightCommand.addEventListener("click", function (event) {
  event.preventDefault();
  for (let i = 0; i < boxes.length; i++) {
    if (boxes[i].textContent === pacMan) {
      boxes[i] = event.target;
      console.log(boxes[i]);
    }
  }
});
