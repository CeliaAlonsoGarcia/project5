
  // if statement to update the result announcement

// Select all the containers
const playerChoiceContainer = document.querySelector("#user-choice");
console.log(playerChoiceContainer);
const computerChoiceContainer = document.querySelector("#computer-choice");
console.log(computerChoiceContainer);
const result = document.querySelector("#result");
console.log(result);
const buttonsChoice = document.querySelectorAll(".choiceButton");
console.log(buttonsChoice);
let userChoice
let computerChoice
let resultDisplay


// fuction for the player to click on one button and the choice to be displayed.
// when the user clicks on the button we want three things to happen: 
// 1. for the choice of the user to be displayed 
// 2.for the computer to generate a choice
// 3. for the result comment to be updated

buttonsChoice.forEach(buttonsChoice => buttonsChoice.addEventListener("click", (e) => {
    userChoice = e.target.value
    playerChoiceContainer.innerHTML = userChoice
    console.log("clicked")
    generateComputerChoice() 
    updateResult()

}))

// function to generate the random choice
function generateComputerChoice (){
    const randomChoice = Math.floor(Math.random() * 3)
    computerChoice = buttonsChoice[randomChoice].value;
    computerChoiceContainer.innerHTML = computerChoice}

    
function updateResult () {


// if statement to update the result announcement
    if (computerChoice === userChoice) {result.innerHTML = "It's a draw"}
    else if (computerChoice === "rock" && userChoice === "scicssors") {result.innerHTML = "Computer wins"}
    else if (computerChoice === "paper" && userChoice === "rock") {result.innerHTML = "Computer wins"}
    else if (computerChoice === "scissors" && userChoice === "paper") {result.innerHTML = "Computer wins"}
    else {result.innerHTML = "You win"}
    }
    







// inner.html to show the emoji the player has chosen

    // document.playerChoiceContainer.innerHTML = 

// computer pics a random emoji

// computer shows the random emoji chosen

// if / else statement to decide who wins

// winning anouncemnt {result.innerHTML = "It's a draw"}
// else if (computerChoice === rock || userChoice === scicssors) {result.innerHTML = "Computer Wins"}
// else if (computerChoice === paper || userChoice === rock) {result.innerHTML = "Computer Wins"}
// else if (computerChoice === scissors || userChoice === paper) {result.innerHTML = "Computer Wins"}
// else {result.innerHTML = "You won!"}






// inner.html to show the emoji the player has chosen

    // document.playerChoiceContainer.innerHTML = 

// computer pics a random emoji

// computer shows the random emoji chosen

// if / else statement to decide who wins

// winning anouncemnt 