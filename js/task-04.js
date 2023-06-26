// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

const alltBtn = document.querySelectorAll('#counter button')
console.log(alltBtn);
// звернулись до кнопок - отримали HTMLелемент
const decrementBtn = document.querySelector('#counter button[data-action="decrement"]');
const incrementBtn = document.querySelector('#counter button[data-action="increment"]');
const currentValue = document.querySelector('#value');

let  counterValue = 0;
// проконтролювали себе
console.log(decrementBtn);
console.log(incrementBtn);

// берем наш HTMLелемент і додаємо на нього слухача події, перший параметр-подія, другий- колбекфункція

decrementBtn.addEventListener('click', decremenClick);
incrementBtn.addEventListener('click', incrementClick);
// створюємо колбек, кожний раз буде приходити event
function decremenClick(event) {
    counterValue -= 1;
    currentValue.textContent= `${counterValue}`;
    console.log(event.currentTarget);

}

function incrementClick(event) {
    counterValue += 1;
    currentValue.textContent= `${counterValue}`;
    console.log(event.currentTarget);
}


// function getcounterValue() {
//     const counterValue = 0;
//     if (decrementBtn.addEventListener('click', event => {
//         counterValue -=1;
//         console.log(counterValue);
//     }));
//     incrementBtn.addEventListener('click', event => {
//         counterValue +=1;
//         console.log(counterValue);
//     });
// };

// console.log(getcounterValue(alltBtn));

// decrementBtn.addEventListener('click', () => {
//     counterValue -= 1;
//     console.log(counterValue);
// });


