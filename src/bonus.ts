//objects to hold image values
type Rpssl = {
  [key: string]: string;
  paper: string;
  rock: string;
  scissors: string;
  spock: string;
  lizard: string;
};

const rpssl: Rpssl = {
  paper: '../bonus/bonus-styles/images/paper.png',
  rock: '../bonus/bonus-styles/images/rock.png',
  scissors: '../bonus/bonus-styles/images/scissors.png',
  spock: '../bonus/bonus-styles/images/spock.png',
  lizard: '../bonus/bonus-styles/images/lizard.png',
};

let amounts = 0;

//user Selection handler
const userHandler = (pickHand: string) => {
  let hand = document.querySelector('.pick') as HTMLElement;
  hand.style.display = 'none';
  let match = document.querySelector('.match') as HTMLElement;
  match.style.display = 'flex';

  //setting user pick
  const userPick = document.getElementById('u-pick') as HTMLImageElement;
  userPick.src = rpssl[pickHand];
  let cpu = cpuHandler();
  ref(pickHand, cpu);
};

//Cpu selection handler
const cpuHandler = () => {
  let picks = ['rock', 'paper', 'scissors', 'spock', 'lizard'];
  let cpu = picks[Math.floor(Math.random() * picks.length)];
  const cpuPick = document.getElementById('cpu-pick') as HTMLImageElement;
  cpuPick.src = rpssl[cpu];
  return cpu;
};

//pulsing animation for winner
const userWin = () => {
  const userWon = document.getElementById('u-pick') as HTMLElement;
  const cpuWon = document.getElementById('cpu-pick') as HTMLElement;
  if (cpuWon.classList.contains('visible')) {
    cpuWon.classList.remove('visible');
  }
  userWon.classList.add('winner');
};

const cpuWin = () => {
  const cpuWon = document.getElementById('cpu-pick') as HTMLElement;
  const userWon = document.getElementById('u-pick') as HTMLElement;
  if (userWon.classList.contains('visible')) {
    userWon.classList.remove('visible');
  }
  cpuWon.classList.add('winner');
};
const draw = () => {
  const userWon = document.getElementById('u-pick') as HTMLElement;
  const cpuWon = document.getElementById('cpu-pick') as HTMLElement;
  userWon.classList.remove('winner');
  cpuWon.classList.remove('winner');
};

const ref = (user: string, cpu: string) => {
  if (user == 'paper' && cpu == 'scissors') {
    elector('YOU LOSE');
    settScore(amounts - 1);
    cpuWin();
  }
  if (user == 'paper' && cpu == 'rock') {
    elector('YOU WIN');
    settScore(amounts + 1);
    userWin();
  }
  if (user == 'paper' && cpu == 'paper') {
    elector("It's a draw");
    draw();
  }
  if (user == 'paper' && cpu == 'spock') {
    elector('YOU WIN');
    settScore(amounts + 1);
    userWin();
  }
  if (user == 'paper' && cpu == 'lizard') {
    elector('YOU LOSE');
    settScore(amounts - 1);
    cpuWin();
  }
  if (user == 'rock' && cpu == 'scissors') {
    elector('YOU WIN');
    settScore(amounts + 1);
    userWin();
  }
  if (user == 'rock' && cpu == 'paper') {
    elector('YOU LOSE');
    settScore(amounts - 1);
    cpuWin();
  }
  if (user == 'rock' && cpu == 'rock') {
    elector("It's a draw");
    draw();
  }
  if (user == 'rock' && cpu == 'spock') {
    elector('YOU LOSE');
    settScore(amounts - 1);
    cpuWin();
  }
  if (user == 'rock' && cpu == 'lizard') {
    elector('YOU WIN');
    settScore(amounts + 1);
    userWin();
  }
  if (user == 'scissors' && cpu == 'scissors') {
    elector("It's a draw");
    draw();
  }
  if (user == 'scissors' && cpu == 'rock') {
    elector('YOU LOSE');
    settScore(amounts - 1);
    cpuWin();
  }
  if (user == 'scissors' && cpu == 'paper') {
    elector('YOU WIN');
    settScore(amounts + 1);
    userWin();
  }
  if (user == 'scissors' && cpu == 'spock') {
    elector('YOU LOSE');
    settScore(amounts - 1);
    cpuWin();
  }
  if (user == 'scissors' && cpu == 'lizard') {
    elector('YOU WIN');
    settScore(amounts + 1);
    userWin();
  }
  if (user == 'spock' && cpu == 'scissors') {
    elector('YOU WIN');
    settScore(amounts + 1);
    userWin();
  }
  if (user == 'spock' && cpu == 'paper') {
    elector('YOU LOSE');
    settScore(amounts - 1);
    cpuWin();
  }
  if (user == 'spock' && cpu == 'rock') {
    elector('YOU WIN');
    settScore(amounts + 1);
    userWin();
  }
  if (user == 'spock' && cpu == 'lizard') {
    elector('YOU LOSE');
    settScore(amounts - 1);
    cpuWin();
  }
  if (user == 'spock' && cpu == 'spock') {
    elector("It's a draw");
    draw();
  }
  if (user == 'lizard' && cpu == 'scissors') {
    elector('YOU WIN');
    settScore(amounts + 1);
    userWin();
  }
  if (user == 'lizard' && cpu == 'rock') {
    elector('YOU LOSE');
    settScore(amounts - 1);
    cpuWin();
  }
  if (user == 'lizard' && cpu == 'paper') {
    elector('YOU WIN');
    settScore(amounts + 1);
    userWin();
  }
  if (user == 'lizard' && cpu == 'spock') {
    elector('YOU WIN');
    settScore(amounts + 1);
    userWin();
  }
  if (user == 'lizard' && cpu == 'lizard') {
    elector("It's a draw");
    draw();
  }
};
const elector = (decide: string) => {
  let decision = document.querySelector('.who-won') as HTMLElement;
  decision.innerText = decide;
  console.log(decide);
};

const settScore = (score: any) => {
  amounts = score;
  const scoreBoard = document.querySelector('.score-div h1') as HTMLElement;
  scoreBoard.innerText = score;
  console.log(scoreBoard);
};

const refreshGame = () => {
  let hand = document.querySelector('.pick') as HTMLElement;
  hand.style.display = 'flex';
  let match = document.querySelector('.match') as HTMLElement;
  match.style.display = 'none';
  draw();
};

const gameRulesHandler = () => {
  console.log('iwork');
  const modalBg = document.querySelector('.modal-bg') as HTMLElement;
  const modal = document.querySelector('.modal') as HTMLElement;
  modalBg.style.display = 'block';
  modal.style.display = 'block';
};

const exitModalHandler = () => {
  const modalBg = document.querySelector('.modal-bg') as HTMLElement;
  const modal = document.querySelector('.modal') as HTMLElement;
  modalBg.style.display = 'none';
  modal.style.display = 'none';
};

const nuGame = document.querySelector('.new-game')!;
nuGame.addEventListener('click', refreshGame);

const gameRules = document.querySelector('.rules-btn')!;
gameRules.addEventListener('click', gameRulesHandler);

const exiter = document.querySelector('.close')!;
exiter.addEventListener('click', exitModalHandler);
