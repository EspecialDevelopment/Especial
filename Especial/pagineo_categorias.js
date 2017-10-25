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

<<<<<<< HEAD
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
<<<<<<< HEAD
   
	/* ADECUACIONES.
	 * 1.- SI NO HAY SUFICIENTES FAMILIAS PARA LLENAR TODOS LOS ESPACIOS, ENTONCES NO CREAR BOTONES
	 * 2.- EL BOTON DE FLECHA DEBE DE TENER UNA IMAGEN.
	 * 3.- SIMPLIFICAR EL CSS DE LOS BOTONES, HACERLOS COMO LOS DEL MENU PERO EN OTRO COLOR.
	 */
	
	/* ACTUALIZACIONES
	 * CREAR LOS BOTONES DE PRODUCTOS SEG�N LA FAMILIA SELECCIONADA.
	 * AL PRESIONAR BOT�N CREAR CONSULTA UTIIZANDO XMLHttpRequest
	 * ENVIANDO EL DATO A CONSULTAR A UNA SCRIPT PHP CON EL NOMBRE DE conProductos.php
	 * ESTE SCRIPT RETONAR� COMO EN EL EJEMPLO DE LAS FAMILIAS UN JSON CON LOS PRODUCTOS
	 * CORRESPONDIENTES A LA FAMILIA SELECCIONADA INCLUYENDO EN CADA BOT�N desc_prod 
	 * Y OCULTO precio_tarifa.
	 */
	
	crearBotonesfamilia();
   
    for (let letra = 0, min = 'a'.charCodeAt(0), max = 'z'.charCodeAt(0); min + letra <= max; letra++) {
        familias.push(
            String.fromCharCode(min + letra)
        );
    }

    if (familias.length <= botones.length) {
        for (let i = 0, l = botones.length; i < l; i++) {
            botones[i].style['display'] = 'none';
        }
        for (let i = 0, l = familias.length; i < l; i++) {
            botones[i].style['display'] = 'block';
            botones[i].querySelector('.etiqueta').innerText = familias[i];
        }
    } else {
        for (let i = 0, l = botones.length; i < l - 1; i++) {
            botones[i].querySelector('.etiqueta').innerText = familias[i];
=======

=======
function iniciar () { // no lleva parámetros
>>>>>>> Sergio
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
>>>>>>> Sergio
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
<<<<<<< HEAD
<<<<<<< HEAD
	var xmlDoc,inputs,info,js;
	
	try 
	{
		if (window.XMLHttpRequest)
	    {
		  var xhttp = new XMLHttpRequest();
	    } 
		else // code for IE5 and IE6
	    {
		  var xhttp = new ActiveXObject("Microsoft.XMLHTTP");
	    }
		
		xhttp.onreadystatechange = function() 
		{
	        if (this.readyState == 4 && this.status == 200) 
	        {
	        	
	            var js 	= JSON.parse(this.responseText);
	            
	         	init(js);
	            
	        }
	        
	    };
		
		xhttp.open('POST', 'http://localhost/PVE/conFamilias.php');
		
	    xhttp.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
		
	    xhttp.send();
		
	
	}
	catch (e) 
	{	
		alert(e.message);
	}	
	

}



window.addEventListener('load', function () {
    
	//init();
	
	getFamilias();
=======
    var xmlDoc,inputs,info,json;
=======
    var json;
>>>>>>> Sergio

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
>>>>>>> Sergio

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
