/* eslint-disable prettier/prettier */
export const createRandomNumber = (num: number) =>
    Math.ceil(Math.random() * num);

export function shuffleArray(array: any) {
    const process  = array.sort(() => Math.random() - 0.5);

    console.log(process )
    return process 
}
