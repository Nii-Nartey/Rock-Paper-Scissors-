"use strict";
const rpssl = {
    paper: '../bonus/bonus-styles/images/paper.png',
    rock: '../bonus/bonus-styles/images/rock.png',
    scissors: '../bonus/bonus-styles/images/scissors.png',
    spock: '../bonus/bonus-styles/images/spock.png',
    lizard: '../bonus/bonus-styles/images/lizard.png',
};
let amounts = 0;
//user Selection handler
const userHandler = (pickHand) => {
    let hand = document.querySelector('.pick');
    hand.style.display = 'none';
    let match = document.querySelector('.match');
    match.style.display = 'flex';
    //setting user pick
    const userPick = document.getElementById('u-pick');
    userPick.src = rpssl[pickHand];
    let cpu = cpuHandler();
    ref(pickHand, cpu);
};
//Cpu selection handler
const cpuHandler = () => {
    let picks = ['rock', 'paper', 'scissors', 'spock', 'lizard'];
    let cpu = picks[Math.floor(Math.random() * picks.length)];
    const cpuPick = document.getElementById('cpu-pick');
    cpuPick.src = rpssl[cpu];
    return cpu;
};
//pulsing animation for winner
const userWin = () => {
    const userWon = document.getElementById('u-pick');
    const cpuWon = document.getElementById('cpu-pick');
    if (cpuWon.classList.contains('visible')) {
        cpuWon.classList.remove('visible');
    }
    userWon.classList.add('winner');
};
const cpuWin = () => {
    const cpuWon = document.getElementById('cpu-pick');
    const userWon = document.getElementById('u-pick');
    if (userWon.classList.contains('visible')) {
        userWon.classList.remove('visible');
    }
    cpuWon.classList.add('winner');
};
const draw = () => {
    const userWon = document.getElementById('u-pick');
    const cpuWon = document.getElementById('cpu-pick');
    userWon.classList.remove('winner');
    cpuWon.classList.remove('winner');
};
const ref = (user, cpu) => {
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
const elector = (decide) => {
    let decision = document.querySelector('.who-won');
    decision.innerText = decide;
    console.log(decide);
};
const settScore = (score) => {
    amounts = score;
    const scoreBoard = document.querySelector('.score-div h1');
    scoreBoard.innerText = score;
    console.log(scoreBoard);
};
const refreshGame = () => {
    let hand = document.querySelector('.pick');
    hand.style.display = 'flex';
    let match = document.querySelector('.match');
    match.style.display = 'none';
    draw();
};
const gameRulesHandler = () => {
    console.log('iwork');
    const modalBg = document.querySelector('.modal-bg');
    const modal = document.querySelector('.modal');
    modalBg.style.display = 'block';
    modal.style.display = 'block';
};
const exitModalHandler = () => {
    const modalBg = document.querySelector('.modal-bg');
    const modal = document.querySelector('.modal');
    modalBg.style.display = 'none';
    modal.style.display = 'none';
};
const nuGame = document.querySelector('.new-game');
nuGame.addEventListener('click', refreshGame);
const gameRules = document.querySelector('.rules-btn');
gameRules.addEventListener('click', gameRulesHandler);
const exiter = document.querySelector('.close');
exiter.addEventListener('click', exitModalHandler);
