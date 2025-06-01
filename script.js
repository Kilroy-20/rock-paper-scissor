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

let humanScore = 0;

let computerScore = 0;

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

let roundCount = 0;

function getHumanChoice(choice) {
    if(roundCount >= 5) return;
    const compChose = getComputerChoice();
    console.log(`You Chose : ${choice}`);
    const result = playRound(choice, compChose);
    para.textContent = `You Chose ${choice}, Computer Chose ${compChose}, Result : ${result}`;

    roundCount++

    document.getElementById("humanPoints").textContent = `Human Score: ${humanScore}`
    document.getElementById("computerPoints").textContent = `Computer Score: ${computerScore}`
if(roundCount === 5) {
    let finalMessage = '';
    if(humanScore > computerScore) {
        finalMessage = 'Human';
    } else if(computerScore > humanScore) {
        finalMessage = "Computer";
    } else {
        finalMessage = "It's a Tie!!";
    }
    document.getElementById("winner").textContent = `This Round is Over, and The WINNER is: ${finalMessage}`
}

setTimeout (() => {resetGame()}, 8000);
}

function resetGame() {
    if(roundCount === 5) {
    humanScore = 0;
    computerScore = 0;
    roundCount = 0;
    para.textContent = '';
    document.getElementById("humanPoints").textContent = "Human Score: 0";
    document.getElementById("computerPoints").textContent = "Computer Score: 0";
    document.getElementById("winner").textContent = "Winner:";
    }
}


// UI for the player
const btnDiv = document.createElement('div');
const buttonOne = document.createElement('button');
const buttonTwo = document.createElement('button');
const buttonThree = document.createElement('button');

btnDiv.id = 'btnDiv'
buttonOne.id = 'rock';
buttonTwo.id = 'paper';
buttonThree.id = 'scissors';

buttonOne.textContent = "Rock";
buttonTwo.textContent = "Paper";
buttonThree.textContent = "Scissors";

btnDiv.appendChild(buttonOne);
btnDiv.appendChild(buttonTwo);
btnDiv.appendChild(buttonThree);

btnDiv.setAttribute('style', 'margin-bottom:20px');

const targetBtn = document.getElementById('playBtn');

document.body.insertBefore(btnDiv, targetBtn);

buttonOne.addEventListener('click', () => getHumanChoice('Rock'));
buttonTwo.addEventListener('click', () => getHumanChoice('Paper'));
buttonThree.addEventListener('click', () => getHumanChoice('Scissors'));

const resultDiv = document.createElement('div');
resultDiv.id = 'resultDiv';
const para = document.createElement('p');
para.classList = 'resultPara';

resultDiv.appendChild(para);
document.body.appendChild(resultDiv);

