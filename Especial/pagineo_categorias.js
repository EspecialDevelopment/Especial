'use strict';
var botones = [];
var panes;
var pagineo = {
    'familia': 0,
    'panes': 0
};

function familiaClick () {
    // si es boton de flecha al hacer click
    if (this.classList.contains('flecha-derecha') || this.classList.contains('flecha-izquierda')) {
        var fetch = [];
        var bl1 = botones.length - 1;
        var bl2 = bl1 - 1;

        if (this.classList.contains('flecha-derecha')) {
            pagineo['familia']++;
        } else {
            pagineo['familia']--;
        }


        if (pagineo['familia'] === 0) {
            for (let i = 0, l = bl1; i < l; i++) {
                if (panes[i] == null) break;    //eslint-disable-line
                fetch.push(panes[i]);

                // console.log(panes[i], i);
            }
        } else {
            for (let i = bl1 + bl2 * (pagineo['familia'] - 1), l = i + bl2; i < l; i++) {
                if (panes[i] == null) break;    //eslint-disable-line
                fetch.push(panes[i]);

                // console.log(panes[i], i);
            }
        }


        esconderBotones(botones);

        var ini = pagineo['familia'] === 0 ? 0 : 1;

        for (let i = ini, l = botones.length; i < l; i++) {
            if (fetch[i - ini] == null) break;    //eslint-disable-line

            botones[i].style['display'] = 'block';
            botones[i].querySelector('.etiqueta').innerText = fetch[i - ini];
        }

        if (fetch.length === bl2) {
            botones[bl1].style['display'] = 'block';
            botones[bl1].classList.add('flecha-derecha');
            botones[bl1].querySelector('.etiqueta').innerText = '->';
        } else {
            botones[bl1].classList.remove('flecha-derecha');
        }

        if (pagineo['familia'] !== 0) {
            botones[0].style['display'] = 'block';
            botones[0].classList.add('flecha-izquierda');
            botones[0].querySelector('.etiqueta').innerText = '<-';
        } else {
            botones[0].classList.remove('flecha-izquierda');

            if (panes.length > bl1) {
                botones[bl1].style['display'] = 'block';
                botones[bl1].classList.add('flecha-derecha');
                botones[bl1].querySelector('.etiqueta').innerText = '->';
            }
        }

    }
}

function esconderBotones (set) {
    for (let i = 0, l = set.length; i < l; i++) {
        set[i].style['display'] = 'none';
    }
}

function crearBotonesfamilia () {
    var fila, celda, boton, etiqueta;
    for (let i = 0; i < 4; i++) {
        fila = document.createElement('div');

        for (let j = 0; j < 3; j++) {
            celda = document.createElement('div');
            boton = document.createElement('button');
            etiqueta = document.createElement('div');

            fila.classList.add('fila');
            celda.classList.add('celda');
            etiqueta.classList.add('etiqueta');

            botones.push(boton);
            boton.appendChild(etiqueta);
            celda.appendChild(boton);
            fila.appendChild(celda);
        }
        document.querySelector('.divFamilias').appendChild(fila);
    }
    console.log(botones);
}

function init () {
    crearBotonesfamilia();
    panes = ['asdasd', 'AHDS', '3132', 'LLL233'];

    for (let letra = 0, min = 'a'.charCodeAt(0), max = 'z'.charCodeAt(0); min + letra <= max; letra++) {
        panes.push(
            String.fromCharCode(min + letra)
        );
    }

    if (panes.length <= botones.length) {
        for (let i = 0, l = botones.length; i < l; i++) {
            botones[i].style['display'] = 'none';
        }
        for (let i = 0, l = panes.length; i < l; i++) {
            botones[i].style['display'] = 'block';
            botones[i].querySelector('.etiqueta').innerText = panes[i];
        }
    } else {
        for (let i = 0, l = botones.length; i < l - 1; i++) {
            botones[i].querySelector('.etiqueta').innerText = panes[i];
        }
        botones[botones.length - 1].querySelector('.etiqueta').innerText = '->';
        botones[botones.length - 1].classList.add('flecha-derecha');
    }

    for (let i = 0, l = botones.length; i < l; i++) {
        botones[i].addEventListener('click', familiaClick);
    }
}

window.addEventListener('load', function () {
    init();


});
