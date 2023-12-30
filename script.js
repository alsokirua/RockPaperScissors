let playerScore = 0;
let computerScore = 0;

document.querySelectorAll('.choice-button').forEach(button => {
  button.addEventListener('click', function(){
    playRound(button.value);
  });
});

function computerPlay() {
  const choices = ['fire', 'earth', 'water'];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection) {
  let computerSelection = computerPlay();
  let result = "";

  if (playerSelection === computerSelection) {
    result = `It's a tie! Both chose ${playerSelection}`;
  } else if ((playerSelection === 'fire' && computerSelection === 'earth') ||
             (playerSelection === 'earth' && computerSelection === 'water') ||
             (playerSelection === 'water' && computerSelection === 'fire')) {
    playerScore++;
    result = `You win! ${playerSelection} beats ${computerSelection}`;
  } else {
    computerScore++;
    result = `You lose! ${computerSelection} beats ${playerSelection}`;
  }

  document.getElementById('player-score').textContent = playerScore;
  document.getElementById('computer-score').textContent = computerScore;
  document.getElementById('result-output').textContent = result;
}
