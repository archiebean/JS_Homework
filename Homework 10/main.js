"use strict"
/* Задание 1*/

function ChangeArr(arr) {
  var NewArr = arr.map(function(names) {
    return names = {name: names};
  })

  return NewArr;
}

ChangeArr(['Vasya', 'Archie']);

/*Задание 2*/

function GetTime(arr) {
  var time = arr.reduce(function(sum, current) {
    return sum + ' : ' + current;
  })

  return 'Текущее время : ' + time;
}

GetTime(['00', '13', '24']);

/*Задание 3*/

function ReturnLetter(str) {
  var text = str.toLowerCase().split('').filter(function(letter) {
    return 'аоийеёэыуюя'.includes(letter);
  }).length;

  return text;
}

ReturnLetter('Привет, меня зовут Артемий!');

/*Задание 4*/

function countSentencesLetters(str) {
  var arr = str.split(/\!|\...|\?/);
  var NewArr = arr.filter(function(emptiness) {
    return emptiness != '';    
  });
 
  var result = NewArr.map(function(item) {
    var sum = item.split('').filter(function(letters) {
      return (letters != ' ') && (letters != ','); 
    }).length;

    return item + ' : ' + 'Letters quantity is: ' + sum;
  });

    return result;
  }

countSentencesLetters('Привет, студент! Студент... Как дела, студент?');

/*Доп. задание*/

function FindWords(str) {
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

FindWords('Привет, студент! Студент... Как дела, студент?');
