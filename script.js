function computerPlay() {
    let outcomes = ["Rock", "Paper", "Scissors"];
    let computerSelection = outcomes[Math.floor(Math.random() * outcomes.length)];
    return computerSelection;
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection.toUpperCase() === "rock" && computerSelection.toUpperCase() === "rock"){
        return "Both players have chosen Rock, it is a tie!";
    }; else if (playerSelection.toUpperCase() === "paper" && computerSelection.toUpperCase() === "paper") {
        return "Both players have chosen Paper, it is a tie!";
    }; else if (playerSelection.toUpperCase() === "scissors" && computerSelection.toUpperCase() === "scissors") {
        return "Both players have chosen Scissors, it is a tie!";
    }; else if (playerSelection.toUpperCase() === "scissors" && computerSelection.toUpperCase() === "paper") {
        return "Player won, Scissors beats Paper!";
    }; else if (playerSelection.toUpperCase() === "scissors" && computerSelection.toUpperCase() === "rock") {
        return "Computer won, Rock beats Scissors!";
    }; else if (playerSelection.toUpperCase() === "paper" && computerSelection.toUpperCase() === "rock") {
        return "Player won, Paper beats Rock!";
    }; else if (playerSelection.toUpperCase() === "paper" && computerSelection.toUpperCase() === "scissors") {
        return "Computer won, Scissors beats Paper!";
    }; else if (playerSelection.toUpperCase() === "rock" && computerSelection.toUpperCase() === "scissors") {
        return "Player won, Rock beats Scissors!";
    }; else if (playerSelection.toUpperCase() === "rock" && computerSelection.toUpperCase() === "paper") {
        return "Computer won, Paper beats Rock!";
    }
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));