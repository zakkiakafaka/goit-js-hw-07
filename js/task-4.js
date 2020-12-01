'use strict';

// const incrementButton = document.querySelector('button[data-action="increment"]');
// const decrementButton = document.querySelector('button[data-action="decrement"]');
// let value = document.querySelector('#value')

// const increment = function () {
//   value.textContent = +value.textContent + 1
// }

// const decrement = function () {
//   value.textContent = +value.textContent - 1
// }

// incrementButton.addEventListener('click', increment);
// decrementButton.addEventListener('click', decrement);

// Лучше использовать переменную с числовым значением а не обращаться каждый раз к текстовому узлу

const incrementButton = document.querySelector('button[data-action="increment"]');
const decrementButton = document.querySelector('button[data-action="decrement"]');
const value = document.querySelector('#value');
let counter = 0;

const increment = function () {
  counter += 1;
  value.textContent = counter;
};

const decrement = function () {
  counter -= 1;
  value.textContent = counter;
};

incrementButton.addEventListener('click', increment);
decrementButton.addEventListener('click', decrement);