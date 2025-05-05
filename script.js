//Step - 2 : Get the computer choice
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

//
//


// Step 3 : Get Human Input
//
//

function getHumanChoice() {
    let input = prompt("Select Rock, Paper, or Scissors!!!")
    formattedInput = input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
    return formattedInput;
}
//
//


// Step 4 - Player Score Variables
// In Global Scope
//

let humanScore = 0;

let computerScore = 0;

// Step 5 - Logic to Play SIngle Round
//
//

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "It's a Draw!!";
    }
    else if (humanChoice === "Rock" && computerChoice ==="Scissors") {
        humanScore++ 
        return "Rock breaks Scissors, Human Wins!";
    }
    else if (humanChoice ==="Scissors" && computerChoice === "Paper") {
        humanScore++
        return "Scissors can cut paper, Hence Human Wins!"
    }
    else if (humanChoice === "Paper" && computerChoice === "Rock") {
        humanScore++
        return "Paper Beats Rock, Human Wins!"
    }
    else {
        computerScore++
        return "Computer Wins!";
    }
}

//Step 6: Logic to play entire game with 5 rounds
// declare playRound and score variables in this function
// call playRound 5 times to play 5 rounds
// 

function playGame() {
    let roundHumanScore = 0;
    let roundComputerScore = 0;

    for (let i=1; i<=5; i++) {
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();
    let result = playRound(humanChoice, computerChoice);
    console.log(result);

    if (result.includes("Human Wins")) {
        roundHumanScore++;
    }
    else if (result.includes("Computer Wins")) {
        roundComputerScore++;
    }
}
    document.getElementById("humanPoints").innerHTML = roundHumanScore;
    document.getElementById("computerPoints").innerHTML = roundComputerScore;
    console.log(`Final Score: Human - ${humanScore}, Computer - ${computerScore}`)
        if (humanScore > computerScore) {
            return "Human Wins the Game!";
        } else if (computerScore > humanScore) {
            return "Computer Wins the Game!";
        } else {
            return "It's a Tie!!";
        }
    }

document.getElementById("playBtn").addEventListener("click", () => {
    let finalMessage = playGame();
    console.log(finalMessage);
    document.getElementById("winner").innerHTML = finalMessage;});

