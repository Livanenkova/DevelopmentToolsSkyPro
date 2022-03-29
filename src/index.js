import './style.css';
// import winPic from './img/winPic.png';
// import losePic from './img/losePic.png';
// import Img from './img/рубашка.png';

import { showPlayPage } from './play.js';

const wrap = document.createElement('div');
wrap.classList.add('wrap');
document.body.appendChild(wrap);

export function startPage() {
    const container = document.createElement('div');
    container.classList.add('container');
    wrap.appendChild(container);

    const complexity = document.createElement('div');
    complexity.classList.add('complexity');
    container.appendChild(complexity);

    const complexityTitle = document.createElement('h2');
    complexityTitle.classList.add('complexity__title');
    complexityTitle.textContent = 'Выбери сложность';
    complexity.appendChild(complexityTitle);

    const complexityValue = document.createElement('div');
    complexityValue.classList.add('complexity__value');
    complexity.appendChild(complexityValue);

    const complexityValueItem1 = document.createElement('div');
    complexityValueItem1.classList.add(
        'complexity__value-item',
        'complexity__value-item--1'
    );
    complexityValueItem1.textContent = '1';
    complexityValue.appendChild(complexityValueItem1);

    const complexityValueItem2 = document.createElement('div');
    complexityValueItem2.classList.add(
        'complexity__value-item',
        'complexity__value-item--2'
    );
    complexityValueItem2.textContent = '2';
    complexityValue.appendChild(complexityValueItem2);

    const complexityValueItem3 = document.createElement('div');
    complexityValueItem3.classList.add(
        'complexity__value-item',
        'complexity__value-item--3'
    );
    complexityValueItem3.textContent = '3';
    complexityValue.appendChild(complexityValueItem3);

    const complexityButton = document.createElement('button');
    complexityButton.classList.add('complexity__button', 'button');
    complexityButton.textContent = 'Старт';
    complexity.appendChild(complexityButton);

    const complexitybutton = document.querySelector('.complexity__button');

    let dataValue = [''];

    complexityValue.addEventListener('click', (event) => {
        dataValue = [];
        dataValue = event.target.innerHTML;
        event.target.style.border = '2px #004980 solid';
    });

    complexitybutton.addEventListener('click', () => {
        if (dataValue === '1') {
            console.log('выбран первый уровень');
            showPlayPage(dataValue);
        } else if (dataValue === '2') {
            console.log('выбран второй уровень');
            showPlayPage(dataValue);
        } else if (dataValue === '3') {
            console.log('выбран третий уровень');
            showPlayPage(dataValue);
        } else {
            console.log('уровень не выбран, попробуйте еще раз');
        }
    });
}

startPage();

// // JS
// import { calc } from './script.js';
// import _ from 'lodash';
// //Assets
// import Img from './img/winPic.png';
// //CSS
// import './css/style.css';

// function component() {
//     const element = document.createElement('div');

//     const number = calc(1, 10);
//     element.innerHTML = _.join(['Hello', `${number}`], ' ');
//     // element.innerHTML = `Hello ${number}`;
//     element.classList.add('foo');

//     const myIcon = new Image();
//     myIcon.src = Img;
//     element.appendChild(myIcon);

//     return element;
// }

// document.body.appendChild(component());
