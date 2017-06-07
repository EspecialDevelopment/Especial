function calcular() {
  var campos = [],
    resultado = document.getElementById('resout'),
    formC = document.forms['cuenta'],
    sum = 0,
    input;

  for (var i = 0, l = formC.elements.length; i < l; i++) {
    input = formC.elements[i];
    if (input.type == 'number') {
      if (input.name.indexOf('c') == -1) {
        sum += input.value * input.name;
      } else {
        var centavos = input.name.replace('c', '0.');
        sum += input.value * centavos;
      }
    }
  }
  resultado.innerText = '$ ' + sum;

  return false;
}

window.onload = function() {};
