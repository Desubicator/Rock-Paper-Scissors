function computerPlay() {
    let outcomes = ["Rock", "Paper", "Scissors"];
    let computerSelection = outcomes[Math.floor(Math.random() * outcomes.length)];
    console.log(computerSelection);
}