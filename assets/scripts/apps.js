//objects to hold image values
const rps = {
  paper: './images/paper.png',
  rock: './images/rock.png',
  scissors: './images/scissors.png',
};

let scores = 0;

//user Selection handler
const pickUserHandler = (pickHand) => {
  let hand = document.querySelector('.pick');
  hand.style.display = 'none';
  let match = document.querySelector('.match');
  match.style.display = 'flex';

  //setting user pick
  const userPick = document.getElementById('u-pick');
  userPick.src = rps[pickHand];
  let cpu = cpuPickHandler();
  referee(pickHand, cpu);
};

//Cpu selection handler
const cpuPickHandler = () => {
  let picks = ['rock', 'paper', 'scissors'];
  let cpu = picks[Math.floor(Math.random() * picks.length)];
  const cpuPick = document.getElementById('cpu-pick');
  cpuPick.src = rps[cpu];
  return cpu;
};

const referee = (user, cpu) => {
  if (user == 'paper' && cpu == 'scissors') {
    decider('YOU LOSE');
  }
  if (user == 'paper' && cpu == 'rock') {
    decider('YOU WIN');
    setScore(scores + 1);
  }
  if (user == 'paper' && cpu == 'paper') {
    decider("It's a tie!");
  }
  if (user == 'rock' && cpu == 'scissors') {
    decider('YOU WIN!');
    setScore(scores + 1);
  }
  if (user == 'rock' && cpu == 'paper') {
    decider('YOU LOSE!');
  }
  if (user == 'rock' && cpu == 'rock') {
    decider("It's a tie!");
  }
  if (user == 'scissors' && cpu == 'scissors') {
    decider("It's a tie!");
  }
  if (user == 'scissors' && cpu == 'rock') {
    decider('YOU LOSE!');
  }
  if (user == 'scissors' && cpu == 'paper') {
    decider('YOU WIN!');
    setScore(scores + 1);
  }
};
const decider = (decide) => {
  let decision = document.querySelector('.who-won');
  decision.innerText = decide;
  console.log(decide);
};

const setScore = (score) => {
  scores = score;
  const scoreBoard = document.querySelector('.score-div h1');
  scoreBoard.innerText = score;
  console.log(scoreBoard);
};

const resetGame = () => {
  let hand = document.querySelector('.pick');
  hand.style.display = 'flex';
  let match = document.querySelector('.match');
  match.style.display = 'none';
};

const rulesHandler = () => {
  console.log('iwork');
  const modalBg = document.querySelector('.modal-bg');
  const modal = document.querySelector('.modal');
  modalBg.style.display = 'block';
  modal.style.display = 'block';
};

const closeModalHandler = () => {
  const modalBg = document.querySelector('.modal-bg');
  const modal = document.querySelector('.modal');
  modalBg.style.display = 'none';
  modal.style.display = 'none';
};

const newGame = document.querySelector('.new-game');
newGame.addEventListener('click', resetGame);

const rules = document.querySelector('.rules-btn');
rules.addEventListener('click', rulesHandler);

const close = document.querySelector('.close');
close.addEventListener('click', closeModalHandler);
