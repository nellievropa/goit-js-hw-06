// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.
// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

const inputContent = document.querySelector('#validation-input');
// console.log(inputContent);
// console.log(inputContent.getAttribute("data-length"));
const maxLength = inputContent.getAttribute("data-length");

console.log(maxLength);
inputContent.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    //  console.log(event.currentTarget.value);
    const content = event.currentTarget;
    console.log(content.value.length);

 if(content.value.length === maxLength) {
   // inputContent.classList.add('valid');
   inputContent.style.borderColor = '#4caf50';
 }else{
 
   // inputContent.classList.add('invalid');
   inputContent.style.borderColor = '#f44336';
 };
};