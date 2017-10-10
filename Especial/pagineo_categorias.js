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
        }
        botones[botones.length - 1].querySelector('.etiqueta').innerText = '->';
        botones[botones.length - 1].classList.add('flecha-derecha');
    }

    for (let i = 0, l = botones.length; i < l; i++) {
        botones[i].addEventListener('click', familiaClick);
    }
}

function getFamilias()
{
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


});
