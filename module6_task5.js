//Модуль 6. Задание 5. Напишите функцию, которая принимает два натуральных числа x и n и возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат. Используйте Arrow Function синтаксис.

let x = 2;
let n = 6;

const toPower = (x, n) => {
  let result = 1;
    for (let i = 0; i <= n - 1; i++) {
      result *= x;
    }
    return result;
}

const checkPower = (x, n) => Math.pow(x, n);

console.log(`Результат возведения в степень: ${toPower(x, n)}`);
console.log(`Результат возведения в степень с помощью функции Math.pow: ${checkPower(x, n)}`);