'use strict';
var timer = null,
  rfcInput = null,
  rfcOutput = document.getElementById('rfcOutput'),
  rfcShow = document.getElementById('rfcShow'),
  rfcResults = document.getElementById('rfcResults'),
  lastSearch = null;

const RFC_REGEX = /([a-z]\w{3})([0-9]\d{5})/i;

rfcShow.style['display'] = 'none';
rfcShow.getElementsByTagName('div')[0].style = 'display:flex; justify-content: center';

function setiFrame(docs) {
  rfcResults.src = 'xml/' + docs[0];
  if (docs.length > 1) {
    var bttnBox = rfcShow.getElementsByTagName('div')[0];
    bttnBox.innerHTML = '';
    for (var i = 0, l = docs.length; i < l; i++) {
      var a = document.createElement('a');
      a.style = 'margin: 0 4px';
      // a.style = 'display: block; height: 50px; width: 50px; background-color: orange';
      a.target = 'rfcResults';
      a.href = 'xml/' + docs[i];
      a.innerText = i + 1;
      bttnBox.appendChild(a);
    }
  }
  rfcShow.style['display'] = 'block';
}

function ajaxCall() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var json = JSON.parse(this.responseText);
      if (json['dirs'].length > 0) {
        rfcOutput.innerText = 'Se han encontrado resultados.';
        setiFrame(json['dirs']);
      } else {
        rfcShow.style['display'] = 'none';
        rfcOutput.innerText = 'No hay resultados.';
      }
    } else if (this.readyState == 4 && this.status != 200) {
      rfcOutput.innerText = 'No se ha podido realizar la búsqueda.';
    }
  };
  xhttp.open('POST', 'php/buscarxml.php');
  xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  xhttp.send('rfc='+encodeURIComponent(rfcInput.value));
}

function readFiles() {
  rfcInput.value = rfcInput.value.trim();
  if (rfcInput.value.length == 10 && RFC_REGEX.test(rfcInput.value)) {
    if (lastSearch != rfcInput.value) {
      lastSearch = rfcInput.value;
      rfcOutput.innerText = 'Buscando...';
      ajaxCall();
    }
  } else {
    rfcShow.style['display'] = 'none';
    rfcOutput.innerText = 'Ingrese un RFC válido.';
  }
}

function verifyAuthenticity(self) {
  rfcInput = self;
  clearTimeout(timer);
  timer = setTimeout(readFiles, 200);
}
