"use strict"
var cont = document.getElementById('cont');
var button = document.getElementsByClassName('button')[0];

var newParagraph1 = document.createElement('p');
var newParagraph2 = document.createElement('p');

cont.appendChild(newParagraph1);
cont.appendChild(newParagraph2);

newParagraph1.innerHTML = 'Привет' + ' - ' + '<a href="#">hi</a>';
newParagraph2.innerHTML = 'Пока' + ' - ' + '<a href="#">bye</a>';

button.addEventListener('click', clickButton);

function clickButton() {
    var links = newParagraph1.children;

    for (var i = 0; i < links.length; i++) {
        links[i].classList.add('changed');
    }
}

newParagraph2.onclick = function(event) {
    var targets = event.target;

    if (targets.tagName === 'A') {
        event.preventDefault();

        alert(targets.href);
    }
};




