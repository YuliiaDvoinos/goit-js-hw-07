// Счетчик состоит из спана и кнопок,
// которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

const decrementRef = document.querySelector('[data-action="decrement"]');
const incrementRef = document.querySelector('[data-action="increment"]');
const valueRef = document.querySelector('#value');
let initialValue = valueRef.textContent = 0;
const decreaseValue = () => {
    initialValue -= 1;
    valueRef.textContent = initialValue;
};
const increaseValue = () => {
    initialValue += 1;
    valueRef.textContent = initialValue;
};
incrementRef.addEventListener('click', increaseValue);
decrementRef.addEventListener('click', decreaseValue);


