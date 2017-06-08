// Variables globales
var formC, resultado, intervalo;

function calcularTotal() {
  var input = null, sum = 0;
  for (var i = 0, l = formC.elements.length; i < l; i++) {
    // El input actual a evaluar
    input = formC.elements[i];
    if (input.type == 'number') {
      input.value = input.value.trim();
      if (input.name.indexOf('c') == -1) {
        sum += input.value * input.name;
      } else {
        var centavos = input.name.replace('c', '0.');
        sum += input.value * centavos;
      }
    }
  }
  resultado.innerText = '$ ' + sum.toFixed(2);
}

window.onload = function() {
  formC = document.forms['vueltascentralizado'];
  resultado = document.getElementById('resultado');
  formC.addEventListener('keyup', function(e) {
    clearInterval(intervalo);
    intervalo = setInterval(calcularTotal, 150);
  });
  document.addEventListener('wheel', function(e) {
    if (document.activeElement.type == 'number') {
      document.activeElement.blur();
    }
  });
};
