/* Напиши скрипт, который выполнит следующие операции.

Посчитает и выведет в консоль количество категорий в ul#categories,
то есть элементов li.item.Получится 'В списке 3 категории.'.
Для каждого элемента li.item в списке ul#categories, найдет и выведет
в консоль текст заголовка элемента(тега h2) и количество элементов в категории
(всех вложенных в него элементов li).

Например для первой категории получится:

Категория: Животные
Количество элементов: 4 */

//1 вариант
// const listRef = document.querySelector('#categories');
// const listLength = listRef.children.length;
// console.log(`В списке ${listLength} категории.`);
// 2 вариант
const listRef = document.querySelectorAll('.item');
console.log(`В списке ${listRef.length} категории`);

listRef.forEach(item => {
    const titleTextContent = item.querySelector('h2').textContent;
    console.log('Категория:', titleTextContent);
    const itemsLength = item.querySelectorAll('ul > li').length;
    console.log('Количество элементов:', itemsLength);
});