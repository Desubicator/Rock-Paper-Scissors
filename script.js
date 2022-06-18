let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll('input');
const resultBox = document.getElementById('result');
pScore = document.getElementById('playerScore');
cScore = document.getElementById('computerScore');

function computerPlay() {
    let choices = ['rock', 'paper', 'scissors']
    return choices[Math.floor(Math.random() * choices.length)]
}

function playRound(playerSelection) {
    let computerSelection = computerPlay()
    let result = ""

    if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection == 'rock')) {
        
        playerScore += 1
        result = ('You win! ' + playerSelection + ' beats ' + computerSelection)
    }
    else if (playerSelection == computerSelection) {
        result = ('It\'s a tie. Both have chosen ' + playerSelection)
    }
    else {
        computerScore += 1
        result = ('You lose! ' + computerSelection + ' beats ' + playerSelection)
        }

        resultBox.innerHTML = result;
        pScore.innerHTML = "Player score: " + playerScore;
        cScore.innerHTML = "Computer score: " + computerScore;

    return
}

buttons.forEach(button =>{
    button.addEventListener('click', function(){
        playRound(button.value)
        button.classList.add("playing");
    })
})

function removeTransition(e) {
    this.classList.remove("playing");
}

buttons.forEach(button => button.addEventListener("mouseout", removeTransition));