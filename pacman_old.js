var pacMan = "🥷🏼";
var placeCommandButton = document.querySelector("#place");
var leftCommand = document.querySelector("#rotateLeft");
var rightCommand = document.querySelector("#rotateRight");
var moveCommand = document.querySelector("#move");
var reportCommand = document.querySelector("#report");
var placeUserInput = document.querySelector("#placePacMan");
var showCurrentLocation = document.querySelector("#currentLocation");
var box = document.querySelector(".box");

// console.log(userInput);
// let validInput = /^[PLACE][0-4],[0-4],(NORTH|EAST|SOUTH|WEST)$/.test(userInput);

placeCommandButton.addEventListener("click", function (event) {
  box = event.target;
  console.log(box.textContent);
  // document.querySelector("#b21").textContent = "";
  let userInput = placeUserInput.value;
  let coordinates = userInput.match(/[0-4]+/g);
  let facingDirection = userInput
    .substring(userInput.length - 5)
    .match(/(NORTH|EAST|SOUTH|WEST)/g)
    .join("");

  if (userInput) {
    // console.log(coordinates);
    let coordinatesOfBox = `x${coordinates[0]}y${coordinates[1]}`;
    // console.log(coordinatesOfBox);
    let box = document.querySelector(`#${coordinatesOfBox}`);

    box.textContent = pacMan;

    let directions = ["NORTH", "EAST", "SOUTH", "WEST"];
    let rightAngle = [0, 90, 180, 270];
    let leftAngle = [360, 270, 180, 90];

    if (facingDirection === "NORTH") {
      box.style.transform = `rotate(0deg)`;
    }
    if (facingDirection === "EAST") {
      box.style.transform = `rotate(90deg)`;
    }
    if (facingDirection === "SOUTH") {
      box.style.transform = `rotate(180deg)`;
    }
    if (facingDirection === "WEST") {
      box.style.transform = `rotate(270deg)`;
    }

    moveCommand.addEventListener("click", function (event) {
      event.preventDefault();
      newBox = event.target;
      console.log(newBox);
      box.textContent = "";
      if (pacMan && facingDirection === "NORTH") {
        let newCoordinates = `x${coordinates[0]}y${Number(coordinates[1]) + 1}`;
        let newBox = document.querySelector(`#${newCoordinates}`);
        newBox.textContent = pacMan;
        newBox.style.transform = `rotate(0deg)`;
      }

      if (pacMan && facingDirection === "EAST") {
        let newCoordinates = `x${Number(coordinates[0]) + 1}y${coordinates[1]}`;
        let newBox = document.querySelector(`#${newCoordinates}`);
        newBox.textContent = pacMan;
        newBox.style.transform = `rotate(90deg)`;
      }
      if (pacMan && facingDirection === "SOUTH") {
        let newCoordinates = `x${coordinates[0]}y${Number(coordinates[1]) - 1}`;
        let newBox = document.querySelector(`#${newCoordinates}`);
        newBox.textContent = pacMan;
        newBox.style.transform = `rotate(180deg)`;
      }
      if (pacMan && facingDirection === "WEST") {
        let newCoordinates = `x${Number(coordinates[0]) - 1}y${coordinates[1]}`;
        let newBox = document.querySelector(`#${newCoordinates}`);
        newBox.textContent = pacMan;
        newBox.style.transform = `rotate(270deg)`;
      }
    });

    let boxes = document.querySelectorAll(".box");
    rightCommand.addEventListener("click", function (event) {
      for (let i = 0; i < boxes.length; i++) {
        if (boxes[i].textContent === pacMan) {
          boxes[i] = event.target;
          // let sum = 0;
          for (let i = 0; i <= directions.length; i++) {
            if (directions[i] === `rotate(${rightAngle[i]}deg)`) {
              boxes[i].style.transform = `rotate(${rightAngle[i + 1]}deg)`;
              // sum += directions[i];
            }
          }
        }
      }
    });

    leftCommand.addEventListener("click", function (event) {
      // let sum = 0;
      for (let i = 0; i < boxes.length; i++) {
        if (boxes[i].textContent === pacMan) {
          boxes[i] = event.target;
          // let sum = 0;
          for (let i = 0; i <= directions.length; i++) {
            if (directions[i] === `rotate(${leftAngle[i]}deg)`) {
              boxes[i].style.transform = `rotate(${leftAngle[i + 1]}deg)`;
              // sum += directions[i];
            }
          }
        }
      }
    });

    reportCommand.addEventListener("click", function (event) {
      for (let i = 0; i < boxes.length; i++) {
        if (boxes[i].textContent === pacMan) {
          let boxCoordinate = boxes[i].id
            .split("")
            .join(",")
            .match(/[0-4]/g)
            .join(",");
          document.createElement(
            "h3"
          ).textContent = `Output: ${boxCoordinate} ,${facingDirection} 
          `;
        }
      }
    });

    if (!userInput) {
      box.textContent = "";
    }
  }
});
