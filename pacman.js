var inputCommand = "🥷🏼";
var userCommand = document.querySelector("#place");
var leftCommand = document.querySelector("#left");
var rightCommand = document.querySelector("#right");
var moveCommand = document.querySelector("#move");

userCommand.addEventListener("click", function (event) {
  let box = event.target;
  console.log(box.textContent);
  document.querySelector("#b21").textContent = "";

  if (userCommand) {
    document.querySelector("#b20").textContent = inputCommand;
  }
  if (inputCommand) {
  }
});

rightCommand.addEventListener("click", function (event) {
  let box = event.target;
  console.log(box);
  document.querySelector("#b20").textContent = "";
  document.querySelector("#b21").textContent = inputCommand;
});

if ((document.querySelector("#b21").textContent = inputCommand)) {
  leftCommand.addEventListener("click", function (event) {
    let box = event.target;
    console.log(box);
    document.querySelector("#b21").textContent = "";
    document.querySelector("#b20").textContent = inputCommand;
  });
}

// loop through this and add conditions for left and right moves
// event listeners for all or how to get moves without each
//
