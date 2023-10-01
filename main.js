'use strict';

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      wrapper = document.querySelector('.wrapper'),
      hearts = wrapper.querySelectorAll('.heart'),
      oneHeart = wrapper.querySelector('.heart');
      

box.style.cssText = 'background-color: blue; width: 250px;';

btns[1].style.borderRadius = '80%';
circles[0].style.backgroundColor = 'red';
hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});

const div = document.createElement('div');

div.classList.add('black');

wrapper.append(div);
wrapper.prepend(div);//создает внутри wrapper первым элементом наш div

// hearts[0].before(div);//перед первым блоком .heart создается наш div
// hearts[0].after(div);//после первого блока .heart создается наш div

// circles[0].remove();//удаляет элемент. В данном случае первый с классом .circle в псевдомассиве circles

hearts[0].replaceWith(circles[0]);//заменяет первый элемент массива hearts на первый элемент массива circles

// document.body.append(div);

// // div.innerHTML = 'Hello World';//можем добавить просто текст, а можем HTML структуру.

// div.innerHTML = '<h1>Hello World</h1>';//добавляем заголовок первого уровня

// // div.textContent = 'hello'; //добавляем обычный текст

// div.insertAdjacentHTML('', '<h2>Hello</h2>');//специальное слово, html который мы хотим вставить