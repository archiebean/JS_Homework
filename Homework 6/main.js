"use strict"
/*Практическое задание 2*/

function Cat() {
  var foodAmount = 50;

  function formatFoodAmount() {
    return foodAmount + 'гр.';
  }

  this.feed = function() {
    console.log('Насыпаем в миску ' + formatFoodAmount() + 'корма.');
  };
}

var cat = new Cat();

cat.feed();

/*Практическое задание 3*/

function Cat() {
  var foodAmount = 50;

  function formatFoodAmount() {
    return foodAmount + 'гр.';
  }

  this.setDailyNorm = function(amount) {
    foodAmount = amount;
    if (amount < 50 || amount > 100) {
      throw new Error("Ошибка!");
    }
    return formatFoodAmount();
  };

  this.feed = function() {
    console.log('Насыпаем в миску ' + this.setDailyNorm() + 'корма.');
  };
}

var cat = new Cat();

cat.feed();
