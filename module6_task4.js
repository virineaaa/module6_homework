//Модуль 6. Задание 4. Напишите функцию, которая принимает два числа. Каждую секунду необходимо выводить в консоль, начиная от первого и заканчивая вторым. Используйте setInterval.

let first_num = +prompt(`Введите первое число интервала отсчета`);
let last_num = +prompt(`Введите последнее число интервала отсчета`);

const countInterval = function (first_num, last_num) {
  intervalId = setInterval(function () {
    if (first_num <= last_num) {
      console.log(first_num);
      first_num++;
    } else {
      clearInterval(intervalId);
    }
  }, 1000);
}

countInterval(first_num, last_num);