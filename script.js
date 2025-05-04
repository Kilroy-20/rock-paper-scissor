//Step - 1 : Get the computer choice
//
//

function getComputerChoice() {
const compChoice = Math.floor(Math.random() * 3);
if (compChoice === 0) {
    return "Rock";
}
else if (compChoice === 1) {
    return "Paper";
}
else {
    return "Scissors";
}
}
const computerChoice = getComputerChoice();
console.log(computerChoice);
document.getElementById("compResult").innerHTML = computerChoice;
//
//


// Step 2 : Get Human Input
//
//

function getHumanChoice() {
    let input = prompt("Select Rock, Paper, or Scissors!!!")
    formattedInput = input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
    return formattedInput;
}
const humanChoice = getHumanChoice();
console.log(humanChoice);
document.getElementById("inputLog").innerHTML = `You chose ${humanChoice}, Good Luck!`;
//
//


// Step 3 - Player Score Variables
// In Global Scope
//

let humanScore = 0;

let computerScore = 0;

// Step 4 - Logic to Play SIngle Round
//
//

function playRound(humanChoice, computerChoice) {
    
}