// Напиши скрипт, який під час набору тексту 
// в інпуті input#name-input (подія input), 
// підставляє його поточне значення в span#name-output. 
// Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

// refs ={
//     inputName: document.querySelector('#name-input'),
//     inputSpan = document.querySelector('#name-output'),
// }


const inputName = document.querySelector('#name-input');
const spanName = document.querySelector('#name-output');

inputName.addEventListener('input', onInputChange);


function onInputChange(event)  {
    const str = event.currentTarget.value.length;
    if (str !== 0) {
        spanName.textContent = event.currentTarget.value;
    }else {
        
        spanName.textContent = 'Anonymus';
    }
    
  };