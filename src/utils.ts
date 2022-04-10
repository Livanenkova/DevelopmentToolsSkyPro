/* eslint-disable prettier/prettier */
export const createRandomNumber = (num: number) =>
    Math.ceil(Math.random() * num);

export function shuffle(array: any) {
    return array.sort(() => Math.random() - 0.5);
}
