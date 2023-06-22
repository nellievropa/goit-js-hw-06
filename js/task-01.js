// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль 
// текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).

const navEl = document.querySelector('#categories');
// categories -це ID - звернути увагу!
console.log('Number of categories:', navEl.children.length);

// вибираємо всіх дітей батька 
console.log(navEl.querySelectorAll('.item'));