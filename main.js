'use strict';

const advertising = document.querySelector('.adv');
const booksCollection = document.querySelector('.books');
const books = document.querySelectorAll('.book');
const bookTree = books[4].querySelector('h2>a');
const secondBookCollection = books[0].querySelectorAll('li');
const fewBookCollection = books[5].querySelectorAll('li');
const sexBookCollection = books[2].querySelectorAll('li');

const newLi = document.createElement('li');

advertising.remove();

booksCollection.prepend(books[1]);
booksCollection.append(books[2]);
books[3].before(books[4]);
bookTree.textContent = 'Книга 3. this и Прототипы Объектов';

secondBookCollection[1].insertAdjacentElement('afterend', secondBookCollection[3]);
secondBookCollection[3].insertAdjacentElement('afterend', secondBookCollection[6]);
secondBookCollection[6].insertAdjacentElement('afterend', secondBookCollection[8]);
secondBookCollection[9].insertAdjacentElement('beforeend', secondBookCollection[2]);


fewBookCollection[1].insertAdjacentElement('afterend', fewBookCollection[9]);
fewBookCollection[9].insertAdjacentElement('afterend', fewBookCollection[3]);
fewBookCollection[3].insertAdjacentElement('afterend', fewBookCollection[4]);
fewBookCollection[7].insertAdjacentElement('afterend', fewBookCollection[5]);

newLi.textContent = 'Глава 8: За пределами ES6';
sexBookCollection[8].append(newLi);


document.body.style.background = ('url(./image/you-dont-know-js.jpg) center no-repeat');

