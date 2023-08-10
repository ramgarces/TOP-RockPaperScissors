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

function getPlayerChoice() {
    let playerChoice = prompt('Choose "Rock", "Paper", or "Scissors" (no quotes):').toLowerCase();
    return playerChoice;
}

function playRound(playerChoice, computerChoice) {
    if (playerChoice == 'rock' && computerChoice == 'paper') {
        return "You lose. Paper beats Rock.";
    } else if (playerChoice == 'rock' && computerChoice == 'scissors') {
        return "You win! Rock beats Scissors.";
    } else if (playerChoice == 'paper' && computerChoice == "scissors") {
        return "You lose. Scissors beats Paper.";
    } else if (playerChoice == 'paper' && computerChoice == 'rock') {
        return "You win! Paper beats Rock.";
    } else if (playerChoice == "scissors" && computerChoice == "rock") {
        return "You lose. Rock beats Scissors";
    } else if (playerChoice == "scissors" && computerChoice == "paper") {
        return "You win! Scissors beats Paper";
    } else {
        return "Tie!"
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (i = 0; i < 5; i++) {
        let playerChoice = getPlayerChoice();
        let computerChoice = getComputerChoice();
        console.log(playRound(playerChoice, computerChoice));
    }
}

game();


// let playerChoice = getPlayerChoice()
// let computerChoice = getComputerChoice()

// console.log("Player choice: " + playerChoice)
// console.log("Computer choice: " + computerChoice)
// console.log(playRound(playerChoice, computerChoice))