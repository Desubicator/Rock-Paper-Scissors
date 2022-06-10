function computerPlay() {
    let outcomes = ["Rock", "Paper", "Scissors"];
    let computerSelection = outcomes[Math.floor(Math.random() * outcomes.length)];
    return computerSelection;
}

function game() {

  let computerScore = 0;
  let playerScore = 0;
  let rounds = parseInt(prompt("Choose amount of rounds"));

  function playRound(playerSelection, computerSelection) {

    if(playerSelection.toUpperCase() === "ROCK" && computerSelection.toUpperCase() === "ROCK"){
        return "Both players have chosen Rock, it is a tie!";
    } else if (playerSelection.toUpperCase() === "PAPER" && computerSelection.toUpperCase() === "PAPER") {
        return "Both players have chosen Paper, it is a tie!";
    } else if (playerSelection.toUpperCase() === "SCISSORS" && computerSelection.toUpperCase() === "SCISSORS") {
        return "Both players have chosen Scissors, it is a tie!";
    } else if (playerSelection.toUpperCase() === "SCISSORS" && computerSelection.toUpperCase() === "PAPER") {
        playerScore++;
        return "Player won, Scissors beats Paper!";
    } else if (playerSelection.toUpperCase() === "SCISSORS" && computerSelection.toUpperCase() === "ROCK") {
        computerScore++;
        return "Computer won, Rock beats Scissors!";
    } else if (playerSelection.toUpperCase() === "PAPER" && computerSelection.toUpperCase() === "ROCK") {
        playerScore++;
        return "Player won, Paper beats Rock!";
    } else if (playerSelection.toUpperCase() === "PAPER" && computerSelection.toUpperCase() === "SCISSORS") {
        computerScore++;
        return "Computer won, Scissors beats Paper!";
    } else if (playerSelection.toUpperCase() === "ROCK" && computerSelection.toUpperCase() === "SCISSORS") {
        playerScore++;
        return "Player won, Rock beats Scissors!";
    } else if (playerSelection.toUpperCase() === "ROCK" && computerSelection.toUpperCase() === "PAPER") {
        computerScore++;
        return "Computer won, Paper beats Rock!";
    }
};

    for (let i = 0; i < rounds; i++) {

        const playerSelection = prompt("Choose between Rock, Paper and Scissors");
        const computerSelection = computerPlay();

        playRound(playerSelection, computerSelection);
        console.log(playRound(playerSelection, computerSelection));
        
     }

     if (playerScore === computerScore) {
        return `Player Score: ${playerScore/2}, Computer Score: ${computerScore/2}, Tie Game!`
     } else if (playerScore < computerScore) {
        return `Player Score: ${playerScore/2}, Computer Score: ${computerScore/2}, Computer Wins!`
     } else {
        return `Player Score: ${playerScore/2}, Computer Score: ${computerScore/2}, Player Wins!`
     }
    
};
