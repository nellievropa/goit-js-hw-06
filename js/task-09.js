
// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.

const changeColorBody = document.querySelector('body');
const changeWidget = document.querySelector('.widget');
const changeColorBtn = document.querySelector('.change-color');
const colorName = document.querySelector('.color')

console.dir(changeColorBody);

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
 console.log(randomColor);
 colorName.textContent = randomColor;

 changeColorBody.style.backgroundColor = `${randomColor}`;
 console.log(changeColorBody.style);


  }



