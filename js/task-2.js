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

// const createIngredient = ingredient => {
//   const itemRef = document.createElement('li');
//   itemRef.textContent = ingredient;
//   itemRef.classList.add('ingredients__item')
// }
// ingredients.forEach(ingredient => {
//   console.log(createIngredient(ingredient))
// })

const ingredientsRef = document.querySelector('#ingredients');
console.log(ingredientsRef);

const igredList = ingredients.map(ingredient => {
  const createList = document.createElement('li');
  createList.classList.add('product');
  createList.textContent = ingredient;

  return createList;
});
ingredientsRef.append(...igredList);