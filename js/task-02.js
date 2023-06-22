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

// const navItemEl1 = document.createElement('li');
// navItemEl.textContent = 'Mushrooms';
// navItemEl.classList.add('item');

// console.log(navItemEl1);

// const navItemEl2 = document.createElement('li');
// navItemEl.textContent = 'Garlic';
// navItemEl.classList.add('item');
// console.log(navItemEl2);


// const navItemEl3 = document.createElement('li');
// navItemEl.textContent = 'Tomatos';
// navItemEl.classList.add('item');
// console.log(navItemEl3);


// const navItemEl4 = document.createElement('li');
// navItemEl.textContent = 'Herbs';
// navItemEl.classList.add('item');
// console.log(navItemEl4);

// const navItemEl5 = document.createElement('li');
// navItemEl.textContent = 'Condiments';
// navItemEl.classList.add('item');
// console.log(navItemEl5);

// const list = document.querySelector('ingredients');


// list.prepend(navItemEl, navItemEl1, navItemEl2, navItemEl3, navItemEl4, navItemEl5);

// console.log(list);

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
