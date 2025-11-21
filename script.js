let userChoice = '';
let computerChoice = '';

const userImages = {
  rock: 'userstone.png',
  paper: 'userpaper.png',
  scissors: 'userscissors.png'
};

const computerImages = {
  rock: 'computerstone.png',
  paper: 'computerpaper.png',
  scissors: 'computerscissors.png'
};

function chooseHand(hand) {
  userChoice = hand;
  // Random computer choice
  computerChoice = ['rock', 'paper', 'scissors'][Math.floor(Math.random() * 3)];

  const userHandImg = document.getElementById('userHand');
  const computerHandImg = document.getElementById('computerHand');

  // Switch to screen 2
  document.getElementById('screen1').classList.remove('active');
  document.getElementById('screen2').classList.add('active');

  // Show user's choice immediately
  userHandImg.src = userImages[hand];

  // Computer hand starts as rock (closed fist) and shakes
  computerHandImg.src = computerImages['rock'];
  computerHandImg.classList.add('shake');

  // After 1 second, show actual computer hand
  setTimeout(() => {
    computerHandImg.classList.remove('shake');
    computerHandImg.src = computerImages[computerChoice];
  }, 1000);

  // After 2 seconds (1 sec shake + 1 sec actual hand), show result screen automatically
  setTimeout(showResult, 2000);
}

function showResult() {
  let result = '';
  if (userChoice === computerChoice) result = "It's a Draw!";
  else if (
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'paper' && computerChoice === 'rock') ||
    (userChoice === 'scissors' && computerChoice === 'paper')
  ) result = "You Win! 🎉";
  else result = "Computer Wins! 😢";

  document.getElementById('screen2').classList.remove('active');
  document.getElementById('screen3').classList.add('active');
  document.getElementById('resultText').innerText = result;
}

function restartGame() {
  document.getElementById('screen3').classList.remove('active');
  document.getElementById('screen1').classList.add('active');

  document.getElementById('userHand').src = '';
  document.getElementById('computerHand').src = 'computerstone.png';
}
