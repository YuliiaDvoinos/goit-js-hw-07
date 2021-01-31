// Напиши скрипт, который бы при потере фокуса на инпуте,
// проверял его содержимое на правильное количество символов.


// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым,
// если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

const validationInputRef = document.querySelector('#validation-input');
//1 вариант
// validationInputRef.addEventListener('blur', event => {
//     const inputValueLength = event.target.value.length;
//     const inputMaxLength = event.target.dataset.length;
//     if (inputValueLength <= inputMaxLength) {
//         validationInputRef.classList.add('valid')
//     } else validationInputRef.classList.add('invalid');
    
// });
//2 вариант
const inputValidCheck = () => {
    const inputValueLength = validationInputRef.value.length;
    const inputMaxLength = validationInputRef.getAttribute('data-length');
    inputValueLength > inputMaxLength
        ? validationInputRef.classList.add('invalid')
        : validationInputRef.classList.add('valid');
        
};
validationInputRef.addEventListener('blur', inputValidCheck)