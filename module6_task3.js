//Модуль 6. Задание 3. Написать функцию, которая принимает число как аргумент и возвращает функцию, которая также принимает число как аргумент и возвращает сумму этих двух чисел. Выведите в консоль результат.

let first_num = 92;
let second_num = 200;

function argFunc (first_num) {
    function returnFunc (second_num) {
      return first_num + second_num;
     }
    return returnFunc(second_num);
}

console.log(argFunc(first_num));