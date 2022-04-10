/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import { startPage } from './index';
import { createRandomNumber, shuffle } from './utils';

let startTime: number;
let topTimerInterval: any;

const arrayCardIndex = [
    'туз',
    'король',
    'дама',
    'валет',
    '10',
    '9',
    '8',
    '7',
    '6',
] as const;

const arrayCardSuits = ['бубны', 'крести', 'пики', 'черви'] as const;

const EASY_LEVEL: number = 6;
const MIDDLE_LEVEL: number = 12;
const HARD_LEVEL: number = 18;

function createCard() {
    return `${arrayCardIndex[createRandomNumber(arrayCardIndex.length - 1)]}${
        arrayCardSuits[createRandomNumber(arrayCardSuits.length - 1)]
    }`;
}

export function createElement(tagName: string, className: string) {
    const tag = document.createElement(tagName);

    if (className) {
        tag.classList.add(className);
    }
    return tag;
}

export function findTime() {
    const endTime: number = Date.now(); // заканчиваем отсчёт времени
    const timerValue = endTime - startTime;
    const sek: number = Math.floor((timerValue / 1000) % 60);
    const min: number = Math.floor((timerValue / (1000 * 60)) % 60);
    const answer = `${min}:${sek}`;
    return answer;
}

export function showPlayPage(dataValue: string) {
    const wrap = document.querySelector('.wrap')!;
    const container = document.querySelector('.container')!;

    const wrapperCards = createElement('div', 'wrapper-cards');

    wrap.appendChild(wrapperCards);
    // interface wrap {
    //     readonly wrap: HTMLDivElement;
    // }
    wrap.removeChild(container);

    const containerTop = createElement('div', 'container-top');
    wrapperCards.appendChild(containerTop);

    const containerTimer = createElement('div', 'container__timer');
    containerTop.appendChild(containerTimer);

    const containerTimerText = createElement('div', 'container__timer-text');
    containerTimer.appendChild(containerTimerText);

    const timerTextMin = createElement('div', 'timer__text-min');
    timerTextMin.textContent = 'min';
    containerTimerText.appendChild(timerTextMin);

    const timerTextSec = createElement('div', 'timer__text-sec');
    timerTextSec.textContent = 'sek';
    containerTimerText.appendChild(timerTextSec);

    const timerNumber = createElement('div', 'timer-number');
    timerNumber.textContent = '00.00';
    containerTimer.appendChild(timerNumber);

    const containerButton = createElement('div', 'container__button');
    containerTop.appendChild(containerButton);

    const startBtn = createElement('button', 'start-btn');
    startBtn.classList.add('button');
    startBtn.textContent = 'Начать заново';
    containerButton.appendChild(startBtn);

    const containerCard = createElement('div', 'container__card');
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

function updateTopTimer() {
    const time = findTime();
    const timerNumber = document.querySelector('.timer-number')!;
    timerNumber.textContent = `${time}`;
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
        arrPlay.push(createCard());
    }
    console.log(arrPlay);
    const arrConcat = arrPlay.concat(arrPlay);
    arrPlay = arrConcat;
    shuffle(arrPlay);
    AddCard(arrPlay, gameValue);
    findCardBack(gameValue);
    startTime = Date.now();
    setTimeout(() => {
        cleanCardWrap();
    }, 6000);
    topTimerInterval = setInterval(() => {
        updateTopTimer();
    }, 1000);
    setTimeout(() => {
        AddcardBack(arrayBack, gameValue);
    }, 6000);
}

function cleanCardWrap() {
    let containerCard = document.querySelector('.container__card')!;

    while (containerCard.firstChild) {
        containerCard.removeChild(containerCard.firstChild);
    }
}

function AddCard(arr: string[], gameValue: number) {
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

    containerCard.addEventListener(
        'click',
        (event) => {
            const userClick = event.target as HTMLElement;
            const userClickNumber = Number(userClick.id);
            console.log(userClickNumber);
            processingClicksCards(userClickNumber);
        },
        {once:true}
    ); 
}

let cardValue: string[] = [];
console.log(cardValue)

function processingClicksCards(userClickNumber: number) {
    arrayBack[userClickNumber] = arrPlay[userClickNumber];
    console.log(arrPlay[userClickNumber])
    console.log(arrayBack[userClickNumber])
    cardValue.push(arrPlay[userClickNumber]);

    comparison2Сards(cardValue) 
    cleanCardWrap();
    AddcardBack(arrayBack, arrayBack.length);
    cheakGameCondition();
}

function  comparison2Сards (cardValue:any) {
    if(cardValue.length === 2 && cardValue[0] === cardValue[1]) {
      console.log('карточки равны - успех');
      cardValue.length = 0;
    } 

    if(cardValue.length === 2 && cardValue[0] != cardValue[1]) {
      console.log('карточки не равны - проигрыш');
      cardValue.length = 0;
      resultLose()
    } 
}

function cheakGameCondition() {
    if (JSON.stringify(arrayBack) === JSON.stringify(arrPlay)) {
        setTimeout(() => {
            resultWin();
        }, 400);
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

    const popup = createElement('div', 'popup');
    wrapperCards.appendChild(popup);

    const popupWrap = createElement('div', 'popup__wrap');
    popup.appendChild(popupWrap);

    const popupWrapImg = createElement('div', 'popup__wrap-img');
    popupWrap.appendChild(popupWrapImg);

    const popupImg = document.createElement('img');
    popupImg.classList.add('popup__img');
    popupImg.src = `./img/${urlimg}.png`;
    popupWrapImg.appendChild(popupImg);

    const popupTitle = createElement('h2', 'popup__title');
    popupTitle.textContent = title;
    popupWrap.appendChild(popupTitle);

    const popupText = createElement('div', 'popup__text');
    popupText.textContent = text;
    popupWrap.appendChild(popupText);

    const popupTime = createElement('div', 'popup__time');
    popupTime.textContent = time;
    popupWrap.appendChild(popupTime);

    const popupButton = createElement('button', 'popup__button');
    popupButton.classList.add('button');
    popupButton.textContent = 'Играть снова';
    popupWrap.appendChild(popupButton);

    popupButton.addEventListener('click', () => {
        const wrap = document.querySelector('.wrap')!;
        const wrapperCards = document.querySelector('.wrapper-cards')!;
        wrap.removeChild(wrapperCards);
        startPage();
    });
}

function resultWin() {
    clearInterval(topTimerInterval);
    const time = findTime();
    addResultPopup('winPic', 'Вы выиграли!', 'Затраченное время:', `${time}`);
}

function resultLose() {
    clearInterval(topTimerInterval);
    const time = findTime();
    addResultPopup('losePic', 'Вы проиграли!', 'Затраченное время:', `${time}`);
}