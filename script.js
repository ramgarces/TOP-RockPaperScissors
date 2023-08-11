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
    let playerChoice = 
        prompt('Choose "Rock", "Paper", or "Scissors":').toLowerCase();
    return playerChoice;
}

function playRound(playerChoice, computerChoice) {
    if (playerChoice == 'rock' && computerChoice == 'paper') {
        return "Computer wins. Paper beats Rock.";
    } else if (playerChoice == 'rock' && computerChoice == 'scissors') {
        return "You win! Rock beats Scissors.";
    } else if (playerChoice == 'paper' && computerChoice == "scissors") {
        return "Computer wins. Scissors beats Paper.";
    } else if (playerChoice == 'paper' && computerChoice == 'rock') {
        return "You win! Paper beats Rock.";
    } else if (playerChoice == "scissors" && computerChoice == "rock") {
        return "Computer wins. Rock beats Scissors";
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
        let result = playRound(playerChoice, computerChoice).slice(0,3);
        if (result == "You") {
            playerScore++;
        } else if (result == "Com") {
            computerScore++;
        }
        console.log("Player Choice :" + playerChoice);
        console.log("Computer Choice: " + computerChoice);
        console.log("Player Score: " + playerScore);
        console.log("Computer Score: " + computerScore);
    }
    if (playerScore > computerScore) {
        console.log("You beat the computer!")
    } else if (playerScore < computerScore) {
        console.log("The computer beat you...")
    } else {
        console.log("It's a tie in the end.")
    }
}

game();