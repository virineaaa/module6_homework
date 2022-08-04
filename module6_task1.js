//Модуль 6. Задание 1. Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее.

let arr = ['Hello', 2, 3 ,'null' , 'NaN', 78, 48, 0];

function countEvenOddNumbers () {
  let evenSum = 0;
  let oddSum = 0;
  let zeroSum = 0;
  
  for (let i=0; i < arr.length; i++) {
    if (typeof arr[i] === "number" && Number.isNaN(arr[i]) === false) {
      if ( arr[i] === 0) {
        zeroSum++
      } else if ( arr[i] % 2 === 0 ) {
        evenSum++;
      } else {
        oddSum++;
      }
    }
  }
  console.log(`Количество четных чисел: ${evenSum}, количество нечетных чисел: ${oddSum}, количество нулей: ${zeroSum}`);
}

countEvenOddNumbers ();