const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// const navItemEl = document.createElement('li');
// navItemEl.textContent = 'Potatoes';
// navItemEl.classList.add('item');

// console.log(navItemEl);



const list = document.querySelector('#ingredients');
const elements = ingredients.map(option => {
      const itemEl = document.createElement('li');
      itemEl.textContent = option;
      itemEl.classList.add('item');
    
        return itemEl;
        
    });
    


console.log(elements);
list.append(...elements);


















// const option = ingredients;
// const ingredientsContainerEl1 = document.querySelector('.ingredients');
// const elements = ingredients.map(option => {
//   const navItemEl = document.createElement('li');
//   navItemEl.textContent = 'Potatoes';
//   navItemEl.classList.add('item');

//     return navItemEl;
    
// });

// console.log(navItemEl);
// console.log(elements);
// ingredientsContainerEl.append(navItemEl);
