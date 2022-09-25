'use strict';
// console.log(document.querySelector('.message').textContent);
// console.log((document.querySelector('.message').innerHTML = 'Hello from DOM'));
// console.log(document.querySelector('.message'));

// document.querySelector('.score').textContent = 20;
// document.querySelector('.number').textContent = 12;

// document.querySelector('.guess').value = 20;

let btnCheck = document.querySelector('.check');

btnCheck.addEventListener('click', function () {
  const guess = document.querySelector('.guess').value;
  if (!guess) {
    document.querySelector('.message').textContent = '🚫 No Number';
  } else {
    console.log(guess);
  }
});
