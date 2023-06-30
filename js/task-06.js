// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.
// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

const inputContent = document.querySelector('#validation-input');
// console.log(inputContent);


const maxLengthRow = inputContent.getAttribute('data-length');
console.log(maxLengthRow);
const maxLength = Number(maxLengthRow);
console.log(maxLength);
inputContent.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
     console.log(event.currentTarget.value.length);
    // const content = event.currentTarget;

 if(event.currentTarget.value.length === maxLength) {
  // console.log(content.value.length);

  inputContent.classList.add('valid');
  inputContent.classList.remove('invalid');

 }else{
  inputContent.classList.add('invalid');
 inputContent.classList.remove('valid');
 }
}