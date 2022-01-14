'use strict';

// const message = (document.querySelector('.message').textContent = 'kurcina');

// document.querySelector('.number').textContent = 13;
// let score = (document.querySelector('.score').textContent = 10);

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

// // if (score === 10)
// //   document.querySelector('.message').textContent = '🎉 Correct Number!';

// console.log(message);

// function broj() {
//   console.log(document.querySelector('.guess').value);
// }

document.querySelector('.again').addEventListener('click', function () {
  body.style = 'background-color: #222';
  displayMessage.textContent = 'Start guessing...';
  numberToGuess.textContent = '?';
  score = 20;
  selectScore.textContent = score;
  numberToGuess.style = 'width: 15rem; font-size: 6rem';
  sercetNumber = Math.trunc(Math.random() * 20) + 1;
});

let sercetNumber = Math.trunc(Math.random() * 20) + 1;
// document.querySelector('.number').textContent = sercetNumber;
let score = 20;
let highscore = 0;

const numberToGuess = document.querySelector('.number');
const displayMessage = document.querySelector('.message');
const body = document.querySelector('body');
const selectScore = document.querySelector('.score');

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  numberToGuess.textContent = '?';

  // When there is no input
  if (!guess) {
    displayMessage.textContent = '⛔ No number!';

    // When player wins the game
  } else if (guess === sercetNumber) {
    displayMessage.textContent = '🎉 Correct Number!';
    numberToGuess.textContent = sercetNumber;
    numberToGuess.style = 'width: 30rem; font-size: 9rem';
    body.style.backgroundColor = '#60b347';

    // Setting highscore to current score if highscore < score
    if (highscore < score) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // If the guess is incorrect show lower or higher and subtract the score by 1
  } else if (guess !== sercetNumber) {
    score--;
    console.log(score);
    selectScore.textContent = score;
    if (score > 0) {
      if (guess > sercetNumber) {
        displayMessage.textContent = 'Too High ☝️';
      } else if (guess < sercetNumber) {
        displayMessage.textContent = 'Too Low 👇';
      }
      // If player score gets to 0 -- PLAYER LOSE
    } else {
      body.style.backgroundColor = 'darkred';
      displayMessage.textContent = '❌ YOU LOSE :( ❌';
    }
  }
});
