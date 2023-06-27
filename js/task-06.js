// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.
// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

const inputContent = document.querySelector('#validation-input');
const maxLength = 6;
// const maxLength =document.querySelector('input[data-length="6"]');
inputContent.addEventListener('blur', onInputBlur);

function onInputBlur(event) {

    // console.log(event.currentTarget);
    const content = event.currentTarget;

 if(content.value.length === maxLength) {
    content.classList.add('valid');
 }else{
content.classList.add('invalid');
 }
}