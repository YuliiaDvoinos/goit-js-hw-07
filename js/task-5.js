// Напиши скрипт который, при наборе текста в инпуте
// input#name - input(событие input), подставляет его текущее значение в span#name
// - output.Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

const nameInputRef = document.querySelector('#name-input');
const nameOutputref = document.querySelector('#name-output');

nameInputRef.addEventListener('input', event => {
    nameOutputref.textContent = event.target.value;
    if (nameInputRef.value == '')
        nameOutputref.textContent = 'незнакомец';
});