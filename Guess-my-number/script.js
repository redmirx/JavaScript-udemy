'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;

let btnCheck = document.querySelector('.check');

btnCheck.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct number';
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent = '📈 Too high';
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = '📉 Too low';
  }
});
