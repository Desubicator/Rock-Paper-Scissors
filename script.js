function computerPlay() {
    let outcomes = ["Rock", "Paper", "Scissors"];
    let computerSelection = outcomes[Math.floor(Math.random() * outcomes.length)];
    return computerSelection;
}

function playRound(playerSelection, computerSelection) {
    let computerScore = 0;
    let playerScore = 0;

    if(playerSelection.toUpperCase() === "ROCK" && computerSelection.toUpperCase() === "ROCK"){
        return "Both players have chosen Rock, it is a tie!";
    } else if (playerSelection.toUpperCase() === "PAPER" && computerSelection.toUpperCase() === "PAPER") {
        return "Both players have chosen Paper, it is a tie!";
    } else if (playerSelection.toUpperCase() === "SCISSORS" && computerSelection.toUpperCase() === "SCISSORS") {
        return "Both players have chosen Scissors, it is a tie!";
    } else if (playerSelection.toUpperCase() === "SCISSORS" && computerSelection.toUpperCase() === "PAPER") {
        playerScore +=1;
        return "Player won, Scissors beats Paper!";
    } else if (playerSelection.toUpperCase() === "SCISSORS" && computerSelection.toUpperCase() === "ROCK") {
        computerScore +=1;
        return "Computer won, Rock beats Scissors!";
    } else if (playerSelection.toUpperCase() === "PAPER" && computerSelection.toUpperCase() === "ROCK") {
        playerScore +=1;
        return "Player won, Paper beats Rock!";
    } else if (playerSelection.toUpperCase() === "PAPER" && computerSelection.toUpperCase() === "SCISSORS") {
        computerScore +=1;
        return "Computer won, Scissors beats Paper!";
    } else if (playerSelection.toUpperCase() === "ROCK" && computerSelection.toUpperCase() === "SCISSORS") {
        playerScore +=1;
        return "Player won, Rock beats Scissors!";
    } else if (playerSelection.toUpperCase() === "ROCK" && computerSelection.toUpperCase() === "PAPER") {
        computerScore +=1;
        return "Computer won, Paper beats Rock!";
    }
};

function game() {
    for (let i = 0; i < 5; i++) {
        playRound(playerSelection, computerSelection);
        console.log(playRound(playerSelection, computerSelection))
     }
     if (playerScore === computerScore) {
        return `Player Score: ${playerScore}, Computer Score: ${computerScore}, Tie Game!`
     } else if (playerScore < computerScore) {
        return `Player Score: ${playerScore}, Computer Score: ${computerScore}, Computer Wins!`
     } else {
        return `Player Score: ${playerScore}, Computer Score: ${computerScore}, Player Wins!`
     }
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));