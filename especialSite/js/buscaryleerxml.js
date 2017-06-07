var input, output, documentos = ['/xml/ejemplo1.xml'];

function leerXML(xml) {
  // solo muestra lo que encontró por mientras
  console.log(xml);
  console.log(xml.indexOf(input.value));
}

function abrirArchivosXML() {
  for (var i = 0; i < documentos.length; i++) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        leerXML(this.responseText);
      }
    }
    var location = window.location.href;
      trimmedLocation  = location.substring(0,location.lastIndexOf('/')),
      trimmedLocation += documentos[i];
    xmlhttp.open('GET', trimmedLocation, true);
    xmlhttp.send();
  }
}

function buscarPalabra() {
  // if (input.value.trim() != '') {
    abrirArchivosXML();
  // }
}

window.onload = function() {
  input = document.getElementById('input');
  output = document.getElementById('output');
  input.value = '';
}
