
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
const inputNumbers = document.querySelector("input")
const inputMinNumber = inputNumbers.getAttribute("min");
const inputMaxNumber = inputNumbers.getAttribute("max");
const step = inputNumbers.getAttribute("step");
console.log(inputMinNumber);
console.log(inputMaxNumber);
console.log(step);

const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
console.log(controlSet);
console.log(createBtn);
console.log(destroyBtn);

const allBoxes = document.querySelector('#boxes');


inputNumbers.addEventListener('click', getCurrentAmount);
createBtn.addEventListener('click',  createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function getCurrentAmount(event) {
  return `${event.currentTarget.value}`;
  // console.log(event.currentTarget.value);
}

function createBoxes(amount) {

  const currentAmount = `${event.currentTarget.value}`;
  console.log(currentAmount);
 
  for (let i = inputMinNumber; i < inputMaxNumber; i += step) {
    const randomColor = `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
    const div =  document.createElement('div'); 
    // const boxes = 0;
    div.classList.add("boxes");
   
    boxes.style.width = `${30}`+ 'px';
    boxes.style.height = `${30}` + 'px';
    boxes.style.backgroundColor = `${randomColor}`;
    console.log(div);
  
  }

}

function destroyBoxes() {
div.boxes.remove();
}


