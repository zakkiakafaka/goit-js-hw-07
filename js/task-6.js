'use strict';

const validationInput = document.querySelector('#validation-input');
const input = Number(validationInput.getAttribute('data-length'));

function validationInputBlur() {
  if (validationInput.value.length === input) {
    validationInput.classList.add('valid');
    validationInput.classList.remove('invalid');
  } else {
    validationInput.classList.add('invalid');
    validationInput.classList.remove('valid');
  }
}

validationInput.addEventListener('blur', validationInputBlur);
