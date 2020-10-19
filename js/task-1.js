'use strict';

// const categoriesCount = document.querySelector('#categories');
// console.log(`В списке ${categories.children.length} категории.`);

// categoriesCount.querySelectorAll('.item').forEach(item => {
//   console.log(`Категория: ${item.querySelector('h2').textContent}\nКоличество элементов: ${item.querySelector('ul').children.length}`);
// }
// );

const categoriesCount = document.querySelectorAll('.item')
console.log(`В списке ${categoriesCount.length} категории`)

const headCount = document.querySelectorAll('.item > h2')
headCount.forEach(el => console.log(`Категория: ${el.textContent}\nКоличество элеиментов: ${el.nextElementSibling.children.length}`))