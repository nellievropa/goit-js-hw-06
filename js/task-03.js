// Використовуй масив об'єктів images для створення елементів <img>, вкладених в <li>. 
// Для створення розмітки використовуй шаблонні рядки і метод insertAdjacentHTML().

// Усі елементи галереї повинні додаватися в DOM за одну операцію додавання.
// Додай мінімальне оформлення галереї флексбоксами або грідами через CSS класи.


const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// const galleryContainer = document.querySelector('.gallery');


const makeGalleryItem = images 
  .map((image) => `<li> <img src= ${image.url} alt= ${image.alt}> </li>`)
  .join('');
   
galleryContainer.insertAdjacentHTML('beforeend', makeGalleryItem);
console.log(galleryContainer);





// Це моє рішення цієї задачі, працює!!!

const galleryContainer = document.querySelector('.gallery');
const makeGalleryItem1 = ({url, alt}) => {
  const itemEl = document.createElement('li');
 
  const imageEl = document.createElement('img');
  imageEl.src = url;
  imageEl.alt = alt;
  imageEl.width = 350;

itemEl.append(imageEl);
  return itemEl;
  
};

console.log(makeGalleryItem1(images[0]));

const elements = images.map(makeGalleryItem1);

galleryContainer.append(...elements);
console.log(galleryContainer);

