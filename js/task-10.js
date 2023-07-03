
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

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function getCurrentAmount(event) {
  // return `${event.currentTarget.value}`;
  console.log(event.currentTarget.value);
}
  
input.addEventListener('click', createBoxes);

  function createBoxes(amount) {
let currentAmount = 0;
    // const amount = `${event.currentTarget.value}`;
    // console.log(amount);
    currentAmount = Number(amount.currentTarget.value);
    console.log(currentAmount);

    const randomColor = `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
      let width = 30;
      let height = 30;
      const box =  document.createElement('div'); 
    let boxesAmount = document.createElement('ul');
    
    box.classList.add("boxes");
   
    boxes.style.width = `${width}`+ 'px';
    boxes.style.height = `${height}` + 'px';
    boxes.style.backgroundColor = `${randomColor}`;
    console.log(box);
   
    for (let i = 2; i < currentAmount; i += step) {

    box[i] =  document.createElement('div'); 
      
      box[i].classList.add("box");
     
      box.style.width = width + 10 + 'px';
      box.style.height = height + 10 + 'px';
      box.style.backgroundColor = `${randomColor}`;
     
      return boxesAmount.append(...box[i]);
    
    }
  console.log(boxesAmount);
  }


  // function destroyBoxes() {
  //   div.boxes.remove();
  //   }

// addListenerBtn.addEventListener('click', () => {
//     console.log('Вішаю слухача події на цільову кнопку');

//     targetBtn.addEventListener('click', () => {
//         console.log('Click по цільовій кнопці');
//     });
// });







