
// Напиши скрипт створення і очищення колекції елементів. 
// Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. 
// Натисненням на кнопку Очистити, колекція елементів очищається.

// Створи функцію createBoxes(amount), яка приймає один параметр - число. 
// Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.


// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

const controlSet = document.querySelector('#controls')
const input = document.querySelector("input")
const allBoxes = document.querySelector('#boxes')
const inputMinNumber = Number(input.getAttribute("min"));
const inputMaxNumber = Number(input.getAttribute("max"));
let step = Number(input.getAttribute("step"));
console.log(inputMinNumber);
console.log(inputMaxNumber);
console.log(step);

const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
console.log(controlSet);
console.log(createBtn);
console.log(destroyBtn);

// inputNumbers.addEventListener('click', getCurrentAmount);
// createBtn.addEventListener('click',  createBoxes);
// destroyBtn.addEventListener('click', destroyBoxes);
createBtn.addEventListener('click', getCurrentAmount);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function getCurrentAmount(event) {
  const currentAmount = `${event.currentTarget.value}`;
  console.log(currentAmount);
  // const  boxesAmount = `${event.currentTarget.value}`;
  // return `${event.currentTarget.value}`;
  function createBoxes(amount) {
    const boxes = [];

    const amount = `${event.currentTarget.value}`;
    // console.log(amount);
    
    console.log(currentAmount);

    const randomColor = `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
    
      let initialSize = 30;
   
    for (let i = 1; i < currentAmount; i += step) {
     
      const box =  document.createElement('div'); 
      box.classList.add("box");
     
      box.style.width = `${initialSize}` + 'px';
      box.style.height =`${initialSize}` + 'px';
      box.style.backgroundColor = `${randomColor}`;
      // console.log(box);
      boxes.push(box);

      initialSize += 10;
    
    }
    allBoxes.append(...boxes);
  }

}
  



// console.log()

  // function destroyBoxes() {
  //   div.boxes.remove();
  //   }

// addListenerBtn.addEventListener('click', () => {
//     console.log('Вішаю слухача події на цільову кнопку');

//     targetBtn.addEventListener('click', () => {
//         console.log('Click по цільовій кнопці');
//     });
// });







