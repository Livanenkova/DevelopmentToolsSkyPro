const { it } = require("@jest/globals");

const { createRandomNumber } = require('./src/utils');

describe('Тестирование функции возвращающей рандомное значение', () => {
    

    it('должен вернуть значение', () => {
      const num = 10;
      
      const createRandomNumberResult = createRandomNumber(num); 

      expect(createRandomNumberResult).toBeDefined();

    })

    it('проверка что значение является числом', () => {
      const num = 5;
      const createRandomNumberResult = createRandomNumber(num);
      expect(typeof createRandomNumberResult).toBe('number')
    });

    it('проверка что значение в нужном диапазоне', () => {
      const num = 7;
      const createRandomNumberResult = createRandomNumber(num);
      expect(createRandomNumberResult).toBeLessThanOrEqual(num);
    });
});


