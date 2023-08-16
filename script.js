

let playerScore = 0;
let computerScore = 0;

//HTML Elements//

//buttons//
const rockBtn = document.querySelector(".rockBtn");
const paperBtn = document.querySelector(".paperBtn");
const scissorsBtn = document.querySelector(".scissorsBtn");

//text//
let results = document.querySelector(".results");

// Functions
function getComputerChoice() {
    let randNum = Math.floor(Math.random() * 3) + 1;
    if (randNum == 1) {
        return "rock";
    } else if (randNum == 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(playerChoice, computerChoice) {
    if (playerChoice == 'rock' && computerChoice == 'paper') {
        results.innerHTML = "Computer wins. Paper beats scissors."
    } else if (playerChoice == 'rock' && computerChoice == 'scissors') {
        results.innerHTML = "You win! Rock beats Scissors.";
    } else if (playerChoice == 'paper' && computerChoice == "scissors") {
        results.innerHTML = "Computer wins. Scissors beats Paper.";
    } else if (playerChoice == 'paper' && computerChoice == 'rock') {
        results.innerHTML = "You win! Paper beats Rock.";
    } else if (playerChoice == "scissors" && computerChoice == "rock") {
        results.innerHTML = "Computer wins. Rock beats Scissors";
    } else if (playerChoice == "scissors" && computerChoice == "paper") {
        results.innerHTML = "You win! Scissors beats Paper";
    } else {
        results.innerHTML = "Tie!"
    }
}

function game() {
    rockBtn.addEventListener("click", function () {
        playRound("rock", getComputerChoice());
    });
    
    paperBtn.addEventListener("click", function () {
        playRound("paper", getComputerChoice());
    });
    
    scissorsBtn.addEventListener("click", function () {
        playRound("scissors", getComputerChoice());
    });
}

game();

// function game() {
//     let playerScore = 0;
//     let computerScore = 0;
//     let playerChoice = getPlayerChoice();
//     let computerChoice = getComputerChoice();
//     let result = playRound(playerChoice, computerChoice).slice(0,3);
//     if (result == "You") {
//         playerScore++;
//     } else if (result == "Com") {
//         computerScore++;
//     }
//     console.log("Player Choice :" + playerChoice);
//     console.log("Computer Choice: " + computerChoice);
//     console.log("Player Score: " + playerScore);
//     console.log("Computer Score: " + computerScore);
//     if (playerScore > computerScore) {
//         console.log("You beat the computer!")
//     } else if (playerScore < computerScore) {
//         console.log("The computer beat you...")
//     } else {
//         console.log("It's a tie in the end.")
//     }
// }

// game();

