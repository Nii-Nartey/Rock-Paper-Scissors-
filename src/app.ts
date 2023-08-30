//objects to hold image values

type Rps = {
  [key: string]: string;
  paper: string;
  rock: string;
  scissors: string;
};

const rps: Rps = {
  paper: 'assets/styles/images/paper.png',
  rock: 'assets/styles/images/rock.png',
  scissors: 'assets/styles/images/scissors.png',
};

let scores = 0;

//user Selection handler
const pickUserHandler = (pickHand: string) => {
  let hand = document.querySelector('.pick') as HTMLElement;
  hand.style.display = 'none';
  let match = document.querySelector('.match') as HTMLElement;
  match.style.display = 'flex';

  //setting user pick
  const userPick = document.getElementById('u-pick') as HTMLImageElement;
  userPick.src = rps[pickHand];
  let cpu = cpuPickHandler();
  referee(pickHand, cpu);
};

//Cpu selection handler
const cpuPickHandler = () => {
  let picks = ['rock', 'paper', 'scissors'];
  let cpu = picks[Math.floor(Math.random() * picks.length)];
  const cpuPick = document.getElementById('cpu-pick') as HTMLImageElement;
  cpuPick.src = rps[cpu];
  return cpu;
};

//pulsing animation for winner
const userWinner = () => {
  const userWon = document.getElementById('u-pick') as HTMLElement;
  const cpuWon = document.getElementById('cpu-pick') as HTMLElement;
  if (cpuWon.classList.contains('winner')) {
    cpuWon.classList.remove('winner');
  }
  userWon.classList.add('winner');
};

const cpuWinner = () => {
  const cpuWon = document.getElementById('cpu-pick') as HTMLElement;
  const userWon = document.getElementById('u-pick') as HTMLElement;
  if (userWon.classList.contains('winner')) {
    userWon.classList.remove('winner');
  }
  cpuWon.classList.add('winner');
};
const tie = () => {
  const userWon = document.getElementById('u-pick') as HTMLElement;
  const cpuWon = document.getElementById('cpu-pick') as HTMLElement;
  userWon.classList.remove('winner');
  cpuWon.classList.remove('winner');
};

//setting winner conditions
const referee = (user: string, cpu: string) => {
  if (user == 'paper' && cpu == 'scissors') {
    decider('YOU LOSE');
    setScore(scores - 1);
    cpuWinner();
  }
  if (user == 'paper' && cpu == 'rock') {
    decider('YOU WIN');
    setScore(scores + 1);
    userWinner();
  }
  if (user == 'paper' && cpu == 'paper') {
    decider("It's a tie");
    tie();
  }
  if (user == 'rock' && cpu == 'scissors') {
    decider('YOU WIN');
    setScore(scores + 1);
    userWinner();
  }
  if (user == 'rock' && cpu == 'paper') {
    decider('YOU LOSE');
    setScore(scores - 1);
    cpuWinner();
  }
  if (user == 'rock' && cpu == 'rock') {
    decider("It's a tie");
    tie();
  }
  if (user == 'scissors' && cpu == 'scissors') {
    decider("It's a tie");
    tie();
  }
  if (user == 'scissors' && cpu == 'rock') {
    decider('YOU LOSE');
    setScore(scores - 1);
    cpuWinner();
  }
  if (user == 'scissors' && cpu == 'paper') {
    decider('YOU WIN');
    setScore(scores + 1);
    userWinner();
  }
};

//decider div
const decider = (decide: string) => {
  let decision = document.querySelector('.who-won') as HTMLElement;
  decision.innerText = decide;
  console.log(decide);
};

const setScore = (score: any) => {
  scores = score;
  const scoreBoard = document.querySelector('.score-div h1') as HTMLElement;
  scoreBoard.innerText = score;
  console.log(scoreBoard);
};

const resetGame = () => {
  let hand = document.querySelector('.pick') as HTMLElement;
  hand.style.display = 'flex';
  let match = document.querySelector('.match') as HTMLElement;
  match.style.display = 'none';
  tie();
};

const rulesHandler = () => {
  console.log('iwork');
  const modalBg = document.querySelector('.modal-bg') as HTMLElement;
  const modal = document.querySelector('.modal') as HTMLElement;
  modalBg.style.display = 'block';
  modal.style.display = 'block';
};

const closeModalHandler = () => {
  const modalBg = document.querySelector('.modal-bg') as HTMLElement;
  const modal = document.querySelector('.modal') as HTMLElement;
  modalBg.style.display = 'none';
  modal.style.display = 'none';
};

const newGame = document.querySelector('.new-game') as HTMLElement;
newGame.addEventListener('click', resetGame);

const rules = document.querySelector('.rules-btn') as HTMLElement;
rules.addEventListener('click', rulesHandler);

const closer = document.querySelector('.close') as HTMLElement;
closer.addEventListener('click', closeModalHandler);
