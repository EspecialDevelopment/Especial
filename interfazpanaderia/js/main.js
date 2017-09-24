'use strict';
var mainframe;

window.addEventListener('load', function () {
    mainframe = document.getElementById('interface');
    
    setInterval(function () {
        console.log(mainframe.clientHeight, mainframe.clientWidth);
    },
    500);
});