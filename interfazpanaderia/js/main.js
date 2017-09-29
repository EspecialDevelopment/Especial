'use strict';
var mainframe, rightarrowtest;

function connectToServer () {

}

function init () {
    mainframe = document.getElementById('interface');
    rightarrowtest = document.querySelector('.row:last-child .cell:nth-child(2) button');
}

window.addEventListener('load', function () {
    init();

    rightarrowtest.classList.add('right-arrow');

    var buttons = document.querySelectorAll('button');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.add('no-image');
    }

    document.getElementById('interface').innerText = connectToServer();
});
