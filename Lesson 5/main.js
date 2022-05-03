"use strict"
/* Задание 1*/
var user = { age: 24};
function isEmpty(obj) {
for (var key in obj) {
    return false;
}
return true;
}

/*Задание 2*/
function pow(x, n) {
return x ** n;
}
var numb = prompt('Введите число');
var power = prompt('Введите степень');
if ((power > 1) && (power % 1 == 0)) {
var result = pow(numb, power);
alert(result);
} else {
    alert('Степень должна быть только натуральным числом!');
}

/*Задание 3*/
function sumTo(n) {
    var sum = 0;
    for (var i = n; i >= 1; i--) {
sum = sum + i;
    }
alert(sum);
}
sumTo(100);

var sum;
function sumTo(n) {
    if (n > 1) {
       return sum = n + sumTo(n - 1);
    } else {
       return sum = 1;
    }
}
sumTo(4);
alert(sum);

function sumTo(n) {
    var sum = n * (n + 1)/2;
    alert(sum);
}
sumTo(100);

//Последний вариант самый быстрый (меньше всего вычислений).
//Самый медленный скорее всего рекурсия (постоянно вызывает новую функцию, более сложный процесс).
//Скорее всего не получится при помощи рекурсии посчитать sumTo(100000). Есть определенные ограничения по памяти,
//где будут хранятся значения функций. А функций тут будет много.

/*Задание 4*/
//1 вариант
var arr =[
    5, 7,
    [4, [2], 8, [1, 3], 2],
    [9, []],
    1, 8
  ];
var sum = 0;
function treeSum(array) {
          for (var i = 0; i < array.length; i++) {
        if (array[i].length == undefined) {            
            if (Number(array[i]) == NaN) {continue} 
            else {
                sum = sum + Number(array[i]);
            }
        } else {
         treeSum(array[i]);   
    }
    }
alert(sum);
}
treeSum(arr);


/*Вариант 2*/
var arr = [
    5, 7,
    [4, [2], 8, [1, 3], 2],
    [9, []],
    1, 8
  ];
function treeSum(array, callback) {
    var item;
    for (var j = 0; j < array.length; j++) {
        if (Number(array[j]) == NaN) {continue}
        else {
      item = array[j];
        }
        if (item.length !== undefined) {
        treeSum(item, callback);
      } else {
        callback(item);
      }
    }
  }
  var newArr = [];
    function callback(item) {
    newArr.push(item)
  }
    treeSum(arr, callback);
  var total = 0;
  for (var i = 0; i < newArr.length; i++) {
    total = total + newArr[i];
  }
    alert(total);



