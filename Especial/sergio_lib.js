function crearBotones() {
    crearBotonesFamilias();
    crearBotonesProductos();
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

function crearBotonesProductos () {
    var fila, celda, boton, etiqueta;
    for (let i = 0; i < 4; i++) {
        fila = document.createElement('div');

        for (let j = 0; j < 5; j++) {
            celda = document.createElement('div');
            boton = document.createElement('button');
            etiqueta = document.createElement('div');

            fila.classList.add('fila');
            celda.classList.add('celda');
            etiqueta.classList.add('etiqueta');

            botonesPro.push(boton);
            boton.appendChild(etiqueta);
            celda.appendChild(boton);
            fila.appendChild(celda);
        }
        document.querySelector('.divProductos').appendChild(fila);
    }
    // console.log(botonesFam);
}

function esconderBotones (set) {
    for (let i = 0, l = set.length; i < l; i++) {
        set[i].style['display'] = 'none';
    }
}

function cambiarDePaginaPro(self) {
    var bl1 = botonesPro.length - 1;
    var bl2 = bl1 - 1;
    var fetch = [];

    if (self) {
        if (self.classList.contains('flecha-derecha')) {
            pagineo['producto']++;
        } else {
            pagineo['producto']--;
        }
    }

    esconderBotones(botonesPro);
    limpiarEventos(botonesPro);

    if (pagineo['producto'] === 0) {
        botonesPro[0].classList.remove('flecha-izquierda');

        for (let i = 0, l = bl1; i < l; i++) {
            if (productos[i] == null) break;
            fetch.push(productos[i]);
            // console.log(productos[i], i);
        }
    } else {
        botonesPro[0].style['display'] = 'block';
        botonesPro[0].classList.add('flecha-izquierda');
        botonesPro[0].querySelector('.etiqueta').innerText = '<-';

        for (let i = bl1 + bl2 * (pagineo['producto'] - 1), l = i + bl2; i < l; i++) {
            if (productos[i] == null) break;
            fetch.push(productos[i]);

            // si es el último elemento de productos
            if (i + 1 === l && productos[i + 1] != null && i + 2 === productos.length) {
                fetch.push(productos[i + 1]);
            }
        }
    }

    var offset = pagineo['producto'] === 0 ? 0 : 1;

    for (let i = offset, l = botonesPro.length; i < l; i++) {
        if (fetch[i - offset] == null) break;

        botonesPro[i].setAttribute('data-cv-prod', fetch[i - offset][0]);
        botonesPro[i].setAttribute('data-desc-prod', fetch[i - offset][1]);
        botonesPro[i].setAttribute('data-timp-prod', fetch[i - offset][2]);
        botonesPro[i].setAttribute('data-cantidad-prod', fetch[i - offset][3]);

        botonesPro[i].style['display'] = 'block';
        botonesPro[i].querySelector('.etiqueta').innerText = fetch[i - offset][1]; // nombre es posición 1

        botonesPro[i].addEventListener('click', productoClick);
    }

    // no tengo ni IDEA de cómo optimizar esto pero es mejor dejarlo así
    if (fetch.length === bl1) {
        if (pagineo['producto'] === 0) {
            botonesPro[bl1].style['display'] = 'block';
            botonesPro[bl1].classList.add('flecha-derecha');
            botonesPro[bl1].querySelector('.etiqueta').innerText = '->';
        } else {
            botonesPro[bl1].style['display'] = 'block';
            botonesPro[bl1].classList.remove('flecha-derecha');
            botonesPro[bl1].querySelector('.etiqueta').innerText = fetch[fetch.length - 1][1]; // nombre es posición 1
        }
    } else if (fetch.length === bl2) {
        botonesPro[bl1].style['display'] = 'block';
        botonesPro[bl1].classList.add('flecha-derecha');
        botonesPro[bl1].querySelector('.etiqueta').innerText = '->';
    } else {
        botonesPro[bl1].classList.remove('flecha-derecha');
    }

}

function cambiarDePaginaFam(self) {
    var bl1 = botonesFam.length - 1;
    var bl2 = bl1 - 1;
    var fetch = [];

    if (self.classList.contains('flecha-derecha')) {
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
                fetch.push(familias[i + 1]);
            }
        }
    }

    var offset = pagineo['familia'] === 0 ? 0 : 1;

    for (let i = offset, l = botonesFam.length; i < l; i++) {
        if (fetch[i - offset] == null) break;

        botonesFam[i].style['display'] = 'block';
        botonesFam[i].querySelector('.etiqueta').innerText = fetch[i - offset];
    }

    // no tengo ni IDEA de cómo optimizar esto pero es mejor dejarlo así
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

function actualizarBotones (tipo) {
    if (tipo === 'productos') {
        cambiarDePaginaPro();
    }
}

function limpiarEventos(grupo) {
    for (let i = 0, l = grupo.length; i < l; i++) {
        grupo[i].removeEventListener('click', productoClick);
    }
    console.log('eventos del grupo de botones eliminados.');
}
