// if statement to update the result announcement

// Select all the containers
const playerChoiceContainer = document.querySelector("#user-choice");
console.log(playerChoiceContainer);
const computerChoiceContainer = document.querySelector("#computer-choice");
console.log(computerChoiceContainer);
const resultDisplay = document.querySelector("#resultDisplay");

const buttonsChoice = document.querySelectorAll(".choiceButton");
console.log(buttonsChoice);
let userChoice;
let computerChoice;
let result;

// fuction for the player to click on one button and the choice to be displayed.
// when the user clicks on the button we want three things to happen:
// 1. for the choice of the user to be displayed
// 2.for the computer to generate a choice
// 3. for the result comment to be updated

buttonsChoice.forEach((buttonsChoice) =>
  buttonsChoice.addEventListener("click", (e) => {
    userChoice = e.target.value;
    playerChoiceContainer.innerHTML = userChoice;
    computerChoiceContainer.innerHTML = "";
    resultDisplay.innerHTML = "";
    console.log("clicked");
    setTimeout(() => {
      generateComputerChoice();
    }, 1000);
    setTimeout(() => {
      updateResult();
    }, 2000);
  })
);

// function to generate the random choice
function generateComputerChoice() {
  const randomChoice = Math.floor(Math.random() * 3) + 1;

  if (randomChoice === 1) {
    computerChoice = "✊";
  }
  if (randomChoice === 2) {
    computerChoice = "✋";
  }
  if (randomChoice === 3) {
    computerChoice = "✌️";
  }

  computerChoiceContainer.innerHTML = computerChoice;
}

// function to update the box that announces who has won

function updateResult() {
  if (computerChoice === userChoice) {
    result = "It's a draw!";
  } else if (computerChoice === "✊" && userChoice === "✌️") {
    result = "You lost!";
  } else if (computerChoice === "✋" && userChoice === "✊") {
    result = "You lost!";
  } else if (computerChoice === "✌️" && userChoice === "✋") {
    result = "You lost!";
  } else {
    result = "You won!";
  }
  resultDisplay.innerHTML = result;
}
