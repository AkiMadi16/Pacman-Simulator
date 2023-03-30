let pacMan = "😃";
let placeCommandButton = document.querySelector("#place");
let leftCommand = document.querySelector("#rotateLeft");
let rightCommand = document.querySelector("#rotateRight");
let moveCommand = document.querySelector("#move");
let reportCommand = document.querySelector("#report");
let userInput = document.querySelector("#placePacMan");
let showCurrentLocation = document.querySelector("#currentLocation");
let boxes = document.querySelectorAll(".box");

//define the placePacMan function here
let x, y, F;
let directions = {
  NORTH: "0deg",
  EAST: "90deg",
  SOUTH: "180deg",
  WEST: "270deg",
};

function placePacMan() {
  if (userInput.value.startsWith("PLACE")) {
    //process each command to determine PacMan's initial location and facing direction.
    let input = userInput.value;
    let coordinates = input.match(/[0-4]+/g);
    let facingDirection = input
      .substring(input.length - 5)
      .match(/(NORTH|EAST|SOUTH|WEST)/g);
    x = parseInt(coordinates[0]);
    y = parseInt(coordinates[1]);
    F = facingDirection.join("");

    for (let i = 0; i < boxes.length; i++) {
      boxes[i].textContent = "";
      boxes[i].classList.remove("active");
      showCurrentLocation.textContent = "";
    }

    //Update the appropriate box on the game board with PacMan's icon and facing direction

    let box = document.querySelector(`#x${x}y${y}`);
    box.textContent = pacMan;
    box.classList.add("active");
    box.style.transform = `rotate(${directions[facingDirection]})`;
  }
}
// call the placePacMan function when the PLACE button is clicked
placeCommandButton.addEventListener("click", placePacMan);

//Move pacman
function movePacMan() {
  // if (userInput.value.includes(F)) {
  switch (F) {
    case "NORTH":
      y++;
      break;
    case "EAST":
      x++;
      break;
    case "SOUTH":
      y--;
      break;
    case "WEST":
      x--;
      break;
  }

  // make sure PacMan stays on the game board
  x = x > 4 ? 4 : x;
  x = x < 0 ? 0 : x;
  y = y > 4 ? 4 : y;
  y = y < 0 ? 0 : y;

  //Clearoff boxes to update the box with moved PacMan
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].textContent = "";
    boxes[i].classList.remove("active");
    showCurrentLocation.textContent = "";
  }

  let newBox = document.querySelector(`#x${x}y${y}`);
  newBox.textContent = pacMan;
  newBox.classList.add("active");
  newBox.style.transform = `rotate(${directions[F]})`;
}

moveCommand.addEventListener("click", movePacMan);

function rotateRightPacMan() {
  // if (userInput.value.includes(F)) {
  //Rotate PacMan right
  switch (F) {
    case "NORTH":
      F = "EAST";
      break;
    case "EAST":
      F = "SOUTH";
      break;
    case "SOUTH":
      F = "WEST";
      break;
    case "WEST":
      F = "NORTH";
      break;
  }

  let currentBox = document.querySelector(`.active`);
  currentBox.style.transform = `rotate(${directions[F]})`;
  // }
}

rightCommand.addEventListener("click", rotateRightPacMan);

function rotateLeftPacMan() {
  //Rotate PacMan right
  switch (F) {
    case "NORTH":
      F = "WEST";
      break;
    case "EAST":
      F = "NORTH";
      break;
    case "SOUTH":
      F = "EAST";
      break;
    case "WEST":
      F = "SOUTH";
      break;
  }

  let currentBox = document.querySelector(`.active`);
  currentBox.style.transform = `rotate(${directions[F]})`;
}

leftCommand.addEventListener("click", rotateLeftPacMan);

reportCommand.addEventListener("click", currentLocation);

function currentLocation() {
  let showCurrentBox = document.querySelector(`.active`);
  if (showCurrentBox) {
    showCurrentLocation.textContent = `${x},${y},${F}`;
  }
}

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "F"];

let btn = document.getElementById("background");

btn.addEventListener("click", (event) => {
  console.log(event);

  let randomColor = "#";

  for (var i = 0; i < 6; i++) {
    randomColor += hex[getRandomNumber()];
  }

  document.body.style.backgroundColor = randomColor;
});

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}
