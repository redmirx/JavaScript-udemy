'use strict';

// Selecting elements
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const dice = document.querySelector('.dice');

score0El.textContent = 0;
score1El.textContent = 0;
dice.classList.add('hidden');
