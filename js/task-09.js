
// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.

const changeWidget = document.querySelector('.widget');
const changeColorBtn = document.querySelector('.change-color');
const colorName = document.querySelector('.color')

changeColorBtn.addEventListener('click', onRandonChange)

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


function onRandonChange(event) {
getRandomHexColor(event)  
 const randomColor = `#${Math.floor(Math.random() * 16777215)
  .toString(16)
  .padStart(6, 0)}`;
 colorName = randomColor;

  }
console.log(onRandonChange())


