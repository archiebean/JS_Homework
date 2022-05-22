"use strict"
/* Задание 1*/

function filterNumbersArr(numbers) {
  var positiveArr = numbers.filter(function(number) {
return number > 0;
});
return positiveArr;
}

filterNumbersArr([-1, 0, 2, 34, -2]);

/*Задание 2*/

function filterNumbersArr(numbers) {
  var positiveArr = numbers.find(function(item) {
return item > 0;
});
return positiveArr;
}

filterNumbersArr([-1, 0, 2, 34, -2]);

/*Задание 3*/

function isPalindrome(word) {
  var arr = word.split('');
  var reverseArr = arr.reverse();
  var reverseWord = reverseArr.join('');
  if (reverseWord == word) {
    return true;
  } else {
    return false;
  }
}

/*Задание 4*/

function areAnagrams(word1, word2) {

    word1 = word1.toLowerCase();
    word2 = word2.toLowerCase();
  
    var arr1 = word1.split('');
    var arr2 = word2.split('');
  
    var sort1 = arr1.sort();
    var sort2 = arr2.sort();

    var sort1Word = sort1.join('');
    var sort2Word = sort2.join('');

    if ( sort1Word == sort2Word ) {
      return true;
    } else {
      return false
    }
}

/*Задание 5*/

function divideArr(arr, size) {
  var newArr = [];
  for (var i = 0; i < Math.ceil(arr.length/size); i++) {
    newArr.push(arr.slice((i*size),(i*size)+size));
  }
  return newArr;
}

/*доп. задание*/
var pow = function(number) {
  var power;
  power = Math.log(number) / Math.log(2);
  if ( power % 1 == 0 ) {
    return true;
  } else {
    return false;
  }
}
pow(4);