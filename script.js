let playerScore = 0;
let computerScore = 0;

//text//
const results = document.querySelector(".results");
const playerChoiceDisplay = document.querySelector(".player-choice");
const computerChoiceDisplay = document.querySelector(".computer-choice");

//buttons//
const rockBtn = document.querySelector(".rockBtn");
rockBtn.addEventListener('click', function () {
    let computerChoice = getComputerChoice();
    let playerChoice = getPlayerChoice("rock");

    playerChoiceDisplay.innerHTML = 
    playerChoice.slice(0,1).toUpperCase() + playerChoice.slice(1,);
    computerChoiceDisplay.innerHTML = 
    computerChoice.slice(0,1).toUpperCase() + computerChoice.slice(1,);

    playRound(playerChoice, computerChoice);

});
const paperBtn = document.querySelector(".paperBtn");
paperBtn.addEventListener('click', function () {
    let computerChoice = getComputerChoice();
    let playerChoice = getPlayerChoice("paper");

    playerChoiceDisplay.innerHTML = 
    playerChoice.slice(0,1).toUpperCase() + playerChoice.slice(1,);
    computerChoiceDisplay.innerHTML = 
    computerChoice.slice(0,1).toUpperCase() + computerChoice.slice(1,);

    playRound(playerChoice, computerChoice);
});
const scissorsBtn = document.querySelector(".scissorsBtn");
scissorsBtn.addEventListener('click', function () {
    let computerChoice = getComputerChoice();
    let playerChoice = getPlayerChoice("scissors");

    playerChoiceDisplay.innerHTML = 
    playerChoice.slice(0,1).toUpperCase() + playerChoice.slice(1,);
    computerChoiceDisplay.innerHTML = 
    computerChoice.slice(0,1).toUpperCase() + computerChoice.slice(1,);

    playRound(playerChoice, computerChoice);
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
    if (playerChoice == 'rock' && computerChoice == 'paper') {
        results.innerHTML = "Computer wins. Paper beats Rock."
        results.style.color = "red";
    } else if (playerChoice == 'rock' && computerChoice == 'scissors') {
        results.innerHTML = "You win! Rock beats Scissors.";
        results.style.color = "green";
    } else if (playerChoice == 'paper' && computerChoice == "scissors") {
        results.innerHTML = "Computer wins. Scissors beats Paper.";
        results.style.color = "red";
    } else if (playerChoice == 'paper' && computerChoice == 'rock') {
        results.innerHTML = "You win! Paper beats Rock.";
        results.style.color = "green";
    } else if (playerChoice == "scissors" && computerChoice == "rock") {
        results.innerHTML = "Computer wins. Rock beats Scissors";
        results.style.color = "red";
    } else if (playerChoice == "scissors" && computerChoice == "paper") {
        results.innerHTML = "You win! Scissors beats Paper";
        results.style.color = "green";
    } else {
        results.innerHTML = "Tie!"
        results.style.color = "blue";
    }
}

function updateScore(results) {
    if (results == "player") {
        playerScore++;
    } else if (results == "computer") {
        computerScore++;
    }
}

console.log(`Player: ${playerScore}`);
console.log(`Computer: ${computerScore}`);

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

