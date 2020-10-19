'use strict';

const incrementButton = document.querySelector('button[data-action="increment"]');
const decrementButton = document.querySelector('button[data-action="decrement"]');
let value = document.querySelector('#value')

const increment = function () {
  value.textContent = +value.textContent + 1
}

const decrement = function () {
  value.textContent = +value.textContent - 1
}

incrementButton.addEventListener('click', increment);
decrementButton.addEventListener('click', decrement);