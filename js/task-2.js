/* Напиши скрипт, который для каждого элемента массива
ingredients создаст отдельный li, после чего вставит
все li за одну операцию в список ul.ingredients.
Для создания DOM - узлов используй document.createElement(). */
const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listRef = document.querySelector('#ingredients');
//1 вариант

// const createList = ingredients.forEach(ingredient => {
//   const itemRef = document.createElement('li');
//   itemRef.textContent = ingredient;
//   listRef.appendChild(itemRef);
// });
//2 вариант

const itemsArr = ingredients.map(ingredient => {
  const itemRef = document.createElement('li');
  itemRef.textContent = ingredient;
  return itemRef
})
 listRef.append(...itemsArr);