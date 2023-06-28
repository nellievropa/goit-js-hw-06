

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
  