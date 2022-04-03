/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import { startPage } from './index';

const startPosition = [
    'тузпики',
    'корольпики',
    'дамапики',
    'валетпики',
    '10пики',
    '9пики',
    '8пики',
    '7пики',
    '6пики',
    'тузчерви',
    'корольчерви',
    'дамачерви',
    'валетчерви',
    '10черви',
    '9черви',
    '8черви',
    '7черви',
    '6черви',
    'тузбубны',
    'корольбубны',
    'дамабубны',
    'валетбубны',
    '10бубны',
    '9бубны',
    '8бубны',
    '7бубны',
    '6бубны',
    'тузкрести',
    'королькрести',
    'дамакрести',
    'валеткрести',
    '10крести',
    '9крести',
    '8крести',
    '7крести',
    '6крести',
];

const CARD_NUMBER: number = 36;
const EASY_LEVEL: number = 6;
const MIDDLE_LEVEL: number = 12;
const HARD_LEVEL: number = 18;

function createElement(tagName: string, className: string) {
    const tag = document.createElement(tagName);

    if (className) {
        tag.classList.add(className);
    }
    return tag;
}

export function showPlayPage(dataValue: string) {
    const wrap = document.querySelector('.wrap')!;
    const container = document.querySelector('.container')!;

    const wrapperCards = document.createElement('div');
    wrapperCards.classList.add('wrapper-cards');
    wrap.appendChild(wrapperCards);
    // interface wrap {
    //     readonly wrap: HTMLDivElement;
    // }
    wrap.removeChild(container);
    const containerTop = document.createElement('div');
    containerTop.classList.add('container-top');
    wrapperCards.appendChild(containerTop);

    const containerTimer = document.createElement('div');
    containerTimer.classList.add('container__timer');
    containerTop.appendChild(containerTimer);

    const containerTimerText = document.createElement('div');
    containerTimerText.classList.add('container__timer-text');
    containerTimer.appendChild(containerTimerText);

    const timerTextMin = document.createElement('div');
    timerTextMin.classList.add('timer__text-min');
    timerTextMin.textContent = 'min';
    containerTimerText.appendChild(timerTextMin);

    const timerTextSec = document.createElement('div');
    timerTextSec.classList.add('timer__text-sec');
    timerTextSec.textContent = 'sek';
    containerTimerText.appendChild(timerTextSec);

    const timerNumber = document.createElement('div');
    timerNumber.classList.add('timer-number');
    timerNumber.textContent = '00.00';
    containerTimer.appendChild(timerNumber);

    const containerButton = document.createElement('div');
    containerButton.classList.add('container__button');
    containerTop.appendChild(containerButton);

    const startBtn = document.createElement('button');
    startBtn.classList.add('start-btn,', 'button');
    startBtn.textContent = 'Начать заново';
    containerButton.appendChild(startBtn);

    const containerCard = document.createElement('div');
    containerCard.classList.add('container__card');
    wrapperCards.appendChild(containerCard);

    startBtn.addEventListener('click', () => {
        wrap.removeChild(wrapperCards);
        startPage();
    });
    if (dataValue === '1') {
        findCards(EASY_LEVEL);
    } else if (dataValue === '2') {
        findCards(MIDDLE_LEVEL);
    } else if (dataValue === '3') {
        findCards(HARD_LEVEL);
    }
}

const createRandomNumber = (num: number) => Math.ceil(Math.random() * num);

function shuffle(array: any) {
    array.sort(() => Math.random() - 0.5);
}

let arrPlay: string[] = [];
let arrayBack: string[] = [];

function findCardBack(num: number) {
    arrayBack = [];
    const back: string = 'рубашка';
    for (let i = 0; i < num; i++) {
        arrayBack.push(back);
    }
    return arrayBack;
}

function findCards(gameValue: number) {
    arrPlay = [];
    const coupleValue = gameValue / 2;
    for (let i = 0; i < coupleValue; i++) {
        let valueCard = createRandomNumber(CARD_NUMBER);
        arrPlay.push(startPosition[valueCard]);
        arrPlay.push(startPosition[valueCard]);
    }

    shuffle(arrPlay);
    AddcardBack(arrPlay, gameValue);
    findCardBack(gameValue);
    setTimeout(() => {
        cleanCardWrap();
    }, 600);
    setTimeout(() => {
        AddcardBack(arrayBack, gameValue);
    }, 600);
}

function cleanCardWrap() {
    let containerCard = document.querySelector('.container__card')!;

    while (containerCard.firstChild) {
        containerCard.removeChild(containerCard.firstChild);
    }
}

function AddcardBack(arr: string[], gameValue: number) {
    const containerCard = document.querySelector('.container__card')!;
    for (let i = 0; i < gameValue; i++) {
        const wrapperCard = document.createElement('div');
        wrapperCard.classList.add('wrapper__card', `wrapper__card${i}`);
        containerCard.appendChild(wrapperCard);
        const cardImg = new Image();
        cardImg.classList.add('card__img', `card__img${i}`);
        cardImg.src = `./img/${arr[i]}.png`;
        cardImg.id = `${[i]}`;
        wrapperCard.appendChild(cardImg);
    }

    containerCard.addEventListener('click', (event) => {
        const userClick = event.target as HTMLElement;
        const userClickNumber = Number(userClick.id);
        processingClicksCards(userClickNumber);
    });
}

function processingClicksCards(userClickNumber: number) {
    arrayBack[userClickNumber] = arrPlay[userClickNumber];
    cleanCardWrap();
    AddcardBack(arrayBack, arrayBack.length);

    cheakGameCondition()
}

function cheakGameCondition() {
  if(JSON.stringify(arrayBack) === JSON.stringify(arrPlay)) {
    resultWin() 
  }
}

function AddcardStartPosition() {
    for (let i = 0; i < startPosition.length; i++) {
        const wrapperCard = document.createElement('div');
        wrapperCard.classList.add('wrapper__card');
        const cardImg = document.createElement('img');
        cardImg.classList.add('card__img');
        cardImg.src = `./img/${startPosition[i]}.png`;
        wrapperCard.appendChild(cardImg);
    }
}

function addResultPopup(
    urlimg: string,
    title: string,
    text: string,
    time: string
) {
    const wrapperCards = document.querySelector('.wrapper-cards')!;

    createElement('div', 'popup');

    const popup = document.createElement('div');
    popup.classList.add('popup');
    wrapperCards.appendChild(popup);

    const popupWrap = document.createElement('div');
    popupWrap.classList.add('popup__wrap');
    popup.appendChild(popupWrap);

    const popupWrapImg = document.createElement('div');
    popupWrapImg.classList.add('popup__wrap-img');
    popupWrap.appendChild(popupWrapImg);

    const popupImg = document.createElement('img');
    popupImg.classList.add('popup__img');
    popupImg.src = `./img/${urlimg}.png`;
    popupWrapImg.appendChild(popupImg);

    const popupTitle = document.createElement('h2');
    popupTitle.classList.add('popup__title');
    popupTitle.textContent = title;
    popupWrap.appendChild(popupTitle);

    const popupText = document.createElement('div');
    popupText.classList.add('popup__text');
    popupText.textContent = text;
    popupWrap.appendChild(popupText);

    const popupTime = document.createElement('div');
    popupTime.classList.add('popup__time');
    popupTime.textContent = time;
    popupWrap.appendChild(popupTime);

    const popupButton = document.createElement('button');
    popupButton.classList.add('popup__button', 'button');
    popupButton.textContent = 'Играть снова';
    popupWrap.appendChild(popupButton);

    popupButton.addEventListener('click', () => {
      console.log('успех')
      const wrap = document.querySelector('.wrap')!;
      const wrapperCards = document.querySelector('.wrapper-cards')!;
      wrap.removeChild(wrapperCards);
      startPage();
      });
}

function resultWin() {
    AddcardStartPosition();
    addResultPopup('winPic', 'Вы выиграли!', 'Затраченное время:', '01.20');
}

// function resultLose() {
//     AddcardStartPosition();
//     addResultPopup('losePic', 'Вы проиграли!', 'Затраченное время:', '01.20');

// }

// resultWin()
// resultLose()
