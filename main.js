

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


// fuction for the player to click on one button and the choice to be displayed.
// when the user clicks on the button we want two things to happen: 1. for the choice of the user
// to be displayed 2.for the computer to generate a choice
buttonsChoice.forEach(buttonsChoice => buttonsChoice.addEventListener("click", (e) => {
    userChoice = e.target.id
    playerChoiceContainer.innerHTML = userChoice
    console.log("clicked")
    generateComputerChoice() 

}))

function generateComputerChoice (){
    const randomChoice = Math.floor(Math.random() * 3)
    const computerChoice = buttonsChoice[randomChoice].id;
    computerChoiceContainer.innerHTML = computerChoice
}

// if statement to update the result announcement
if (titleInput.value == "" || yearInput.value == "" || plotInput.value == "" || ratingInput.value == "" || runtimeInput.value == "") {
  alert("Ensure you input a value in all fields!");
} else {

}



// inner.html to show the emoji the player has chosen

    // document.playerChoiceContainer.innerHTML = 

// computer pics a random emoji

// computer shows the random emoji chosen

// if / else statement to decide who wins

// winning anouncemnt 