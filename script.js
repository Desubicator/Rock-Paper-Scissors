function computerPlay() {
    let outcomes = ["Rock", "Paper", "Scissors"];
    let computerSelection = outcomes[Math.floor(Math.random() * outcomes.length)];
    return computerSelection;
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection.toUpperCase() === "ROCK" && computerSelection.toUpperCase() === "ROCK"){
        return "Both players have chosen Rock, it is a tie!";
    } else if (playerSelection.toUpperCase() === "PAPER" && computerSelection.toUpperCase() === "PAPER") {
        return "Both players have chosen Paper, it is a tie!";
    } else if (playerSelection.toUpperCase() === "SCISSORS" && computerSelection.toUpperCase() === "SCISSORS") {
        return "Both players have chosen Scissors, it is a tie!";
    } else if (playerSelection.toUpperCase() === "SCISSORS" && computerSelection.toUpperCase() === "PAPER") {
        return "Player won, Scissors beats Paper!";
    } else if (playerSelection.toUpperCase() === "SCISSORS" && computerSelection.toUpperCase() === "ROCK") {
        return "Computer won, Rock beats Scissors!";
    } else if (playerSelection.toUpperCase() === "PAPER" && computerSelection.toUpperCase() === "ROCK") {
        return "Player won, Paper beats Rock!";
    } else if (playerSelection.toUpperCase() === "PAPER" && computerSelection.toUpperCase() === "SCISSORS") {
        return "Computer won, Scissors beats Paper!";
    } else if (playerSelection.toUpperCase() === "ROCK" && computerSelection.toUpperCase() === "SCISSORS") {
        return "Player won, Rock beats Scissors!";
    } else if (playerSelection.toUpperCase() === "ROCK" && computerSelection.toUpperCase() === "PAPER") {
        return "Computer won, Paper beats Rock!";
    }
};

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));