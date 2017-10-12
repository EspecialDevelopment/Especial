'use strict';
var botonesFam = [];
var familias = [];
var pagineo = {
    'familia': 0,
    'panes': 0
};

function familiaClick () {
    console.log(this);
    // si es boton de flecha al hacer click
    if (this.classList.contains('flecha-derecha') || this.classList.contains('flecha-izquierda')) {
        var fetch = [];
        var bl1 = botonesFam.length - 1;
        var bl2 = bl1 - 1;

        if (this.classList.contains('flecha-derecha')) {
            pagineo['familia']++;
        } else {
            pagineo['familia']--;
        }

        esconderBotones(botonesFam);

        if (pagineo['familia'] === 0) {
            botonesFam[0].classList.remove('flecha-izquierda');

            for (let i = 0, l = bl1; i < l; i++) {
                if (familias[i] == null) break;
                fetch.push(familias[i]);
                // console.log(familias[i], i);
            }
        } else {
            botonesFam[0].style['display'] = 'block';
            botonesFam[0].classList.add('flecha-izquierda');
            botonesFam[0].querySelector('.etiqueta').innerText = '<-';

            for (let i = bl1 + bl2 * (pagineo['familia'] - 1), l = i + bl2; i < l; i++) {
                if (familias[i] == null) break;
                fetch.push(familias[i]);

                // si es el último elemento de familias
                if (i + 1 === l && familias[i + 1] != null && i + 2 === familias.length) {
                    fetch.push(familias[i + 1])
                }
            }
        }

        var offset = pagineo['familia'] === 0 ? 0 : 1;

        for (let i = offset, l = botonesFam.length; i < l; i++) {
            if (fetch[i - offset] == null) break;

            botonesFam[i].style['display'] = 'block';
            botonesFam[i].querySelector('.etiqueta').innerText = fetch[i - offset];
        }

        // no tengo ni IDEA de cómo optimizar esto, pero es mejor dejarlo así
        if (fetch.length === bl1) {
            if (pagineo['familia'] === 0) {
                botonesFam[bl1].style['display'] = 'block';
                botonesFam[bl1].classList.add('flecha-derecha');
                botonesFam[bl1].querySelector('.etiqueta').innerText = '->';
            } else {
                botonesFam[bl1].style['display'] = 'block';
                botonesFam[bl1].classList.remove('flecha-derecha');
                botonesFam[bl1].querySelector('.etiqueta').innerText = fetch[fetch.length - 1];
            }
        } else if (fetch.length === bl2) {
            botonesFam[bl1].style['display'] = 'block';
            botonesFam[bl1].classList.add('flecha-derecha');
            botonesFam[bl1].querySelector('.etiqueta').innerText = '->';
        } else {
            botonesFam[bl1].classList.remove('flecha-derecha');
        }

    }
}

function esconderBotones (set) {
    for (let i = 0, l = set.length; i < l; i++) {
        set[i].style['display'] = 'none';
    }
}

function crearBotonesFamilias () {
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

            botonesFam.push(boton);
            boton.appendChild(etiqueta);
            celda.appendChild(boton);
            fila.appendChild(celda);
        }
        document.querySelector('.divFamilias').appendChild(fila);
    }
    // console.log(botonesFam);
}


function init (familias) {

    /* ADECUACIONES.
     * 1.- SI NO HAY SUFICIENTES FAMILIAS PARA LLENAR TODOS LOS ESPACIOS, ENTONCES NO CREAR BOTONES
     * 2.- EL BOTON DE FLECHA DEBE DE TENER UNA IMAGEN.
     * 3.- SIMPLIFICAR EL CSS DE LOS BOTONES, HACERLOS COMO LOS DEL MENU PERO EN OTRO COLOR.
     */

    /* ACTUALIZACIONES
     * CREAR LOS BOTONES DE PRODUCTOS SEGÚN LA FAMILIA SELECCIONADA.
     * AL PRESIONAR BOTÓN CREAR CONSULTA UTIIZANDO XMLHttpRequest
     * ENVIANDO EL DATO A CONSULTAR A UNA SCRIPT PHP CON EL NOMBRE DE conProductos.php
     * ESTE SCRIPT RETONARÁ COMO EN EL EJEMPLO DE LAS FAMILIAS UN JSON CON LOS PRODUCTOS
     * CORRESPONDIENTES A LA FAMILIA SELECCIONADA INCLUYENDO EN CADA BOTÓN desc_prod
     * Y OCULTO precio_tarifa.
     */


    // for (let letra = 0, min = 'a'.charCodeAt(0), max = 'z'.charCodeAt(0); min + letra <= max; letra++) {
    //     familias.push(
    //         String.fromCharCode(min + letra)
    //     );
    // }

    crearBotonesFamilias();

    if (familias.length <= botonesFam.length) {
        for (let i = 0, l = botonesFam.length; i < l; i++) {
            botonesFam[i].style['display'] = 'none';
        }
        for (let i = 0, l = familias.length; i < l; i++) {
            botonesFam[i].style['display'] = 'block';
            botonesFam[i].querySelector('.etiqueta').innerText = familias[i];
        }
    } else {
        for (let i = 0, l = botonesFam.length; i < l - 1; i++) {
            botonesFam[i].querySelector('.etiqueta').innerText = familias[i];
        }
        botonesFam[botonesFam.length - 1].querySelector('.etiqueta').innerText = '->';
        botonesFam[botonesFam.length - 1].classList.add('flecha-derecha');
    }

    for (let i = 0, l = botonesFam.length; i < l; i++) {
        botonesFam[i].addEventListener('click', familiaClick);
    }
}

function getFamilias()
{
    var xmlDoc,inputs,info,json;

    try
    {
        var xhttp;

        if (window.XMLHttpRequest) {
            xhttp = new XMLHttpRequest();
        } else { // code for IE5 and IE6
            xhttp = new ActiveXObject('Microsoft.XMLHTTP');
        }

        xhttp.onreadystatechange = function() {
            if (this.readyState === 4 && this.status === 200) {
                json = JSON.parse(this.responseText);
                console.log(json);
                for (let i = 0; i < 33; i++) {
                    familias.push(i + 1);
                }
                init(json);
            }
        };

        let address = 'conFamilias.php'; // 'http://localhost/PVE/conFamilias.php';
        xhttp.open('POST', address);

        xhttp.setRequestHeader('Content-Type','application/x-www-form-urlencoded');

        xhttp.send();
    }
    catch (e)
    {
        alert(e.message);
        console.log(e);
    }

}

window.addEventListener('load', function () {
    getFamilias();
});
