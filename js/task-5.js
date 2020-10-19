'use strict';

const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

function inputName(event) {
  nameInput.value ? (nameOutput.textContent = event.currentTarget.value) : (nameOutput.textContent = 'незнакомец');
};
nameInput.addEventListener('input', inputName);
