// Напиши скрипт, який реагує на зміну значення input#font-size-control
//  (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

const inputFont = document.querySelector('#font-size-control');
console.log(inputFont.value)
const spanSize = document.querySelector('#text');
console.log(spanSize.style.fontSize);

inputFont.addEventListener('input', onFontSiseControl);

function onFontSiseControl(event) {
// console.log(event.currentTarget.value);
spanSize.style.fontSize = event.currentTarget.value + 'px';
}

// console.log(onFontSiseControl());