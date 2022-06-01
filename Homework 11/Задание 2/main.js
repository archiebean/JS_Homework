"use strict"

/*Задание 2*/

var tabelBody = document.getElementsByTagName('tbody')[0];

tabelBody.onclick = function(event) {
    var targets = event.target;

    if (targets.tagName === 'TD') {
        if (targets.id === 'add') {
            var createRow = document.createElement('tr');
            var firstRow = tabelBody.firstElementChild;

            createRow.innerHTML = '<td></td><td></td><td></td>';
            tabelBody.insertBefore(createRow, firstRow);
        } else {
            var words = targets.innerText;
            targets.innerHTML = '<input type="text">';
            var input = tabelBody.getElementsByTagName('input')[0];
            input.onblur = saveText;
            
            input.value = words;
            input.focus();
        }
    }

};

function saveText(event) {
    var target = event.currentTarget;
    target.parentNode.innerHTML = target.value;
}



