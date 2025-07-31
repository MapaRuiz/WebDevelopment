//clasica

function suma(a, b) {
  return a + b;
}
console.log(suma(1, 2));
//Si deja reescribir en el nombre de la funcion, y no importa donde esta el log

const multiplicar = function (a, b) {
  return a * b;
};
console.log(multiplicar(1, 2));
//no deja sobreescribir, evidentemente el const debe estar antes

//fnc como parametro de otra fnc
function operar(a, b, operacion) {
  return operacion(a, b);
}
console.log(operar(1, 2, suma));
console.log(operar(1, 2, multiplicar));

function btnDerechaClick() {
  //Nombre mamon
  console.log("Boton derecho pulsado");
}
//Funciones anonimas - no necesitan nombre
let resultado = operar(1, 2, function (a, b) {
  return a - b;
});
console.log(resultado);

//arrow (-function + =>)
const division = (a, b) => {
  return a / b;
};

//si arrow tiene solo 1 parametro se pueden quitar los parentesis
const elevarCuadrado = (numero) => {
  return numero * numero;
};

const elevar = (numero, exponente = 2) => {
  //return Math.pow(numero, exponente);
  return numero ** exponente;
};
console.log(elevar(2));
console.log(elevar(2, 3));

//Funciones anonimas + arrow
resu = operar(1, 2, (a, b) => a - b);
console.log(resultado);
