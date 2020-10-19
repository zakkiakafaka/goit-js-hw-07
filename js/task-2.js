'use strict';

const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

//   const liCreator = ingredients.map(item => {
//     const li = document.createElement('li');
//     li.textContent = item;
//     return li;
//   });
//   document.querySelector('#ingredients').prepend(...liCreator);


ingredients.forEach(el => {
    const liCreator = document.createElement('li')
    const list = document.querySelector('#ingredients')
    liCreator.textContent = el
    list.appendChild(liCreator)
  }
  )
