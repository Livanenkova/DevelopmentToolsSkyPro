/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
const { shuffleArray } = require('./src/utils');
const { it } = require('@jest/globals');

// jest.mock("Math");

const testShuffleArray = () => {
    it('Проверка что массив содержит эти же элементы', () => {
        const testArray = ['1', '2', '3'];
        const testArrayResult = shuffleArray(testArray);
        expect(testArrayResult).toContain('1', '2', '3');
    });

    it('Проверка что у массива та же длина', () => {
        const testArray = ['4', '5', '6'];
        const testArrayResult = shuffleArray(testArray);

        expect(testArrayResult.length).toBe(testArray.length);
    });

    it('Проверка что у массива перемешаны элементы', () => {
      const testArray = ['7', '8', '9','10', '11'];

      const mockMath = Object.create(global.Math);
        mockMath.random = () => 0.12345678;
        global.Math = mockMath;

      const testArrayResult = shuffleArray(testArray);

      expect(testArrayResult[0]).not.toContain('7');
  });
};

testShuffleArray();
