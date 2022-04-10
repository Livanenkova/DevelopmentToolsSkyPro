/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
const { shuffle } = require('./src/utils');
const { it } = require('@jest/globals');

const testShuffleArray = () => {
    it('Проверка что массив содержит эти же элементы', () => {
        const testArray = ['q', 'w', 'e'];
        const testArrayResult = shuffle(testArray);
        expect(testArrayResult).toContain('q', 'w', 'e');
    });

    it('Проверка что у массива та же длина', () => {
        const testArray = ['q', 'w', 'e'];
        const testArrayResult = shuffle(testArray);

        expect(testArrayResult.length).toBe(testArray.length);
    });
};

testShuffleArray();
