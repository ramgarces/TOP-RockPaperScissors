let playerScore = 0;
let computerScore = 0;

const results = document.querySelector(".results");

const playerChoiceDisplay = document.querySelector(".player-choice");
const computerChoiceDisplay = document.querySelector(".computer-choice");

const playerScoreDisplay = document.querySelector(".player-score");
const computerScoreDisplay = document.querySelector(".computer-score");
playerScoreDisplay.innerHTML = playerScore; // to display 0 first
computerScoreDisplay.innerHTML = computerScore; // to display 0 first

const resultsContainer = document.querySelector(".results-container");
const buttonContainer = document.querySelector(".button-container");
const choicesContainer = document.querySelector(".choices-container");
const scoreContainer = document.querySelector(".score-container");

//buttons//
const rockBtn = document.querySelector(".rockBtn");
rockBtn.addEventListener('click', function () {
    let computerChoice = getComputerChoice();
    let playerChoice = getPlayerChoice("rock");
    let result = playRound(playerChoice, computerChoice);

    displayChoices(playerChoice, computerChoice);

    updateScore(result);
    displayScore();
    showWinner(playerScore, computerScore);
});
const paperBtn = document.querySelector(".paperBtn");
paperBtn.addEventListener('click', function () {
    let computerChoice = getComputerChoice();
    let playerChoice = getPlayerChoice("paper");
    let result = playRound(playerChoice, computerChoice);

    displayChoices(playerChoice, computerChoice);

    updateScore(result);
    displayScore();
    showWinner(playerScore, computerScore);
});
const scissorsBtn = document.querySelector(".scissorsBtn");
scissorsBtn.addEventListener('click', function () {
    let computerChoice = getComputerChoice();
    let playerChoice = getPlayerChoice("scissors");
    let result = playRound(playerChoice, computerChoice);

    displayChoices(playerChoice, computerChoice);

    updateScore(result);
    displayScore();
    showWinner(playerScore, computerScore);
});

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

function getPlayerChoice(choice) {
    return choice;
}

function playRound(playerChoice, computerChoice) {
    // 0 = computer win, 1 = player win for updateScore() function
    if (playerChoice == 'rock' && computerChoice == 'paper') {
        results.innerHTML = "Computer wins. Paper beats Rock."
        results.style.color = "red";
        return 0;
    } else if (playerChoice == 'rock' && computerChoice == 'scissors') {
        results.innerHTML = "You win! Rock beats Scissors.";
        results.style.color = "green";
        return 1;
    } else if (playerChoice == 'paper' && computerChoice == "scissors") {
        results.innerHTML = "Computer wins. Scissors beats Paper.";
        results.style.color = "red";
        return 0;
    } else if (playerChoice == 'paper' && computerChoice == 'rock') {
        results.innerHTML = "You win! Paper beats Rock.";
        results.style.color = "green";
        return 1;
    } else if (playerChoice == "scissors" && computerChoice == "rock") {
        results.innerHTML = "Computer wins. Rock beats Scissors";
        results.style.color = "red";
        return 0;
    } else if (playerChoice == "scissors" && computerChoice == "paper") {
        results.innerHTML = "You win! Scissors beats Paper";
        results.style.color = "green";
        return 1;
    } else {
        results.innerHTML = "Tie!"
        results.style.color = "blue";
    }
}

function updateScore(results) {
    if (results == 1) {
        playerScore++;
    } else if (results == 0) {
        computerScore++;
    }
}

function displayChoices(playerChoice, computerChoice) {
    playerChoiceDisplay.innerHTML = 
    playerChoice.slice(0,1).toUpperCase() + playerChoice.slice(1,);
    computerChoiceDisplay.innerHTML = 
    computerChoice.slice(0,1).toUpperCase() + computerChoice.slice(1,);
}

function displayScore() {
    playerScoreDisplay.innerHTML = playerScore;
    computerScoreDisplay.innerHTML = computerScore;
}

function showWinner(playerScore, computerScore) {
    if (playerScore >= 5) {
        buttonContainer.style.display = "none";
        choicesContainer.style.display = "none";
        resultsContainer.innerHTML = "You win!"
    } else if (computerScore >= 5) {
        buttonContainer.style.display = "none";
        choicesContainer.style.display = "none";
        resultsContainer.innerHTML = "Computer wins..."
    }
}

