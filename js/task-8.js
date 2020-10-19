'use strict';

const inputNumber = document.querySelector('#controls input');
const render = document.querySelector('button[data-action="render"]');
const destroy = document.querySelector('button[data-action="destroy"]');
const container = document.querySelector('#boxes')

let amount

const createBoxes = function () {
  let initialWidth = 20;
  let initialHeight = 20;
  for (let i = 1; i <= amount; i++) {
    let random1 = Math.round(Math.random() * 255);
    let random2 = Math.round(Math.random() * 255);
    let random3 = Math.round(Math.random() * 255);
    container.innerHTML += `<div class='box-${i}'></div>`
    const box = document.querySelector(`.box-${i}`)
    initialHeight += 10;
    initialWidth += 10;
    box.style.width = `${initialWidth}px`;
    box.style.height = `${initialHeight}px`;
    box.style.backgroundColor = `rgb(${random1}, ${random2}, ${random3})`
  }
}

const destroyBoxes = function () {
  while (container.firstChild) {
  container.removeChild(container.firstChild);
}
}

inputNumber.addEventListener('input', (event) => {
  amount = event.target.value;
})

render.addEventListener('click', createBoxes)
destroy.addEventListener('click', destroyBoxes)