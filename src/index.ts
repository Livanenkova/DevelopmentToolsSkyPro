import './style.css';
import { showPlayPage } from './play';
// import * as _ from 'lodash';

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

    let dataValue = '';

    complexityValue.addEventListener('click', (event) => {
        dataValue = '';
        const target = event.target as HTMLElement;
        dataValue = target.innerHTML;

        target.style.border = '2px #004980 solid';
    });

    // interface complexityButton {
    //     readonly complexityButton: HTMLButtonElement;
    // }

    complexityButton.addEventListener('click', () => {
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
