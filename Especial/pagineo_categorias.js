'use strict';
var botonesFam = []; // botones de la sección familia
var botonesPro = []; // botones de la sección productos, empleados, etc.
var familias = []; // arreglo global para la información de familias
var productos = []; // arreglo global para productos, empleados, etc.
var pagineo = {
    'familia': 0,
    'producto': 0
};

function familiaClick () {
    // si es boton de flecha al hacer click
    if (this.classList.contains('flecha-derecha') || this.classList.contains('flecha-izquierda')) {
        cambiarDePaginaFam(this);
    } else { // si es botón de familia
        getProductos(this);
    }
}

function productoClick () {
    alert(`Soy un producto y me llamo "${this.getAttribute('data-desc-prod')}".\nMe vendo a $${this.getAttribute('data-timp-prod')} pesos y soy muy rico.`);
}

function iniciar () { // no lleva parámetros
    /* ADECUACIONES.
     * 1.- SI NO HAY SUFICIENTES FAMILIAS PARA LLENAR TODOS LOS ESPACIOS, ENTONCES NO CREAR BOTONES
     * 2.- EL BOTON DE FLECHA DEBE DE TENER UNA IMAGEN.
     * 3.- SIMPLIFICAR EL CSS DE LOS BOTONES, HACERLOS COMO LOS DEL MENU PERO EN OTRO COLOR. */
    /* ACTUALIZACIONES
     * CREAR LOS BOTONES DE PRODUCTOS SEGÚN LA FAMILIA SELECCIONADA.
     * AL PRESIONAR BOTÓN CREAR CONSULTA UTIIZANDO XMLHttpRequest
     * ENVIANDO EL DATO A CONSULTAR A UNA SCRIPT PHP CON EL NOMBRE DE conProductos.php
     * ESTE SCRIPT RETONARÁ COMO EN EL EJEMPLO DE LAS FAMILIAS UN JSON CON LOS PRODUCTOS
     * CORRESPONDIENTES A LA FAMILIA SELECCIONADA INCLUYENDO EN CADA BOTÓN desc_prod
     * Y OCULTO precio_tarifa. */

    crearBotones();

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
    var json;

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
                familias = JSON.parse(this.responseText);
                for (let i = 0; i < 10; i++) {
                    familias.push(i + 1);
                }
                iniciar();
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

function getProductos(familia)
{
    var json;

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
                esconderBotones(botonesPro);

                console.log(this.responseText);
                productos = JSON.parse(this.responseText);

                actualizarBotones('productos');
            }
        };

        let address = 'conProductos.php';
        xhttp.open('POST', address);

        xhttp.setRequestHeader('Content-Type','application/x-www-form-urlencoded');

        var postData = 'familia=' + encodeURI(familia.innerText);
        // console.log(postData);
        xhttp.send(postData);
    }
    catch (e)
    {
        alert(e.message);
        console.log(e);
    }

}

window.addEventListener('load', getFamilias);
