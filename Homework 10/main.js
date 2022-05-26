"use strict"
/* Задание 1*/

function changeArr(arr) {
  var newArr = arr.map(function(names) {
    return {name: names};
  })

  return newArr;
}

changeArr(['Vasya', 'Archie']);

/*Задание 2*/

function getTime(arr) {
  var time = arr.reduce(function(sum, current) {
    return sum + ' : ' + current;
  }, ('Текущее время '));

  return time;
}

getTime(['00', '13', '24']);

/*Задание 3*/

function returnLetter(str) {
  var text = str.toLowerCase().split('').filter(function(letter) {
    return 'аоийеёэыуюя'.includes(letter);
  }).length;

  return text;
}

returnLetter('Привет, меня зовут Артемий!');

/*Задание 4*/

function countSentencesLetters(str) {
  var arr = str.split(/\!|\...|\?/);
  var newArr = arr.filter(function(emptiness) {
    return emptiness != '';    
  });
 
  var result = newArr.map(function(item) {
    var sum = item.split('').filter(function(letters) {
      return (letters != ' ') && (letters != ','); 
    }).length;

    return item + ' : ' + 'Letters quantity is: ' + sum;
  });

  var res = result.forEach(function(items) {
    console.log(items);
  });

  return res;
    
  }

countSentencesLetters('Привет, студент! Студент... Как дела, студент?');

/*Доп. задание*/

function findWords(str) {
  var arr = str.toLowerCase().split(/\!|\?|\.|\,| /).filter(function(emptiness) {
    return emptiness != '';    
  });

  var repeat = 0;
  var word;

  for ( var i = 0; i < arr.length-1; i++) {
    
    var sum = arr.filter(function(words) {
      return words == arr[i];
    }).length;

    if ( sum > repeat) {
      repeat = sum;
      word = arr[i];
    }
  }
  return 'Максимальное число повторений у слова ' + word + ' - ' + repeat;
}

findWords('Привет, студент! Студент... Как дела, студент?');
