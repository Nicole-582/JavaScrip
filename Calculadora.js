'use strict';
const pantalla = document.getElementById('pantalla');
let operacion = '';

function agregar(valor) {
  if (pantalla.textContent === '0' || pantalla.textContent === 'Error') {
    operacion = valor;
  } else {
    operacion += valor;
  }
  pantalla.textContent = operacion;
}

function limpiar() {
  operacion = '';
  pantalla.textContent = '0';
}

function retroceder() {
  const pantalla=document.getElementById('pantalla');
  operacion = operacion.slice(0, -1);
  pantalla.textContent = operacion || '0';
}

function calcular() {
  try {
    let resultado = eval(operacion.replace('%', '/100'));
    pantalla.textContent = resultado;
    operacion = resultado.toString();
  } catch {
    pantalla.textContent = 'Error';
    operacion = '';
  }
}


module.exports=calcular;
module.exports= agregar;
module.exports=limpiar;
module.exports=retroceder;
