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

  this.DailyNorm = function(amount) {
    if (!arguments.length) return formatFoodAmount();
    
    if (amount < 50 || amount > 100) {
      throw new Error("Ошибка!");
    }
    foodAmount = amount;
  };

  this.feed = function() {
    console.log('Насыпаем в миску ' + this.DailyNorm() + 'корма.');
  };
}

var cat = new Cat();

cat.feed();
