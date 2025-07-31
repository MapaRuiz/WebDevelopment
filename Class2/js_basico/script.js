//Imprimir en consola//
console.log("Hola mundo");
console.error("Esto es un error");
console.warn("Esto es un aviso");
//Variables
//NO tipadas SI dinamicas
let variable = "Variable";
console.log(variable);
variable = 10;
console.log(variable);

//Constante
const constante = 20;
console.log(constante);
//constante = 30;
const arreglo = [1, 2, 3];
arreglo[0] = 10;
console.log(arreglo);

//var vs let (var no respeta los scope)

//condicionales
let edad = 18;
if (edad >= 18) {
  console.log("Eres mayor de edad");
} else {
  console.log("Eres menor de edad");
}

//switch
let categoria = "A";
switch (categoria) {
  case "A":
    console.log("Categoria A");
    break;
  case "B":
    console.log("Categoria B");
    break;
  default:
    console.log("Categoria C");
    break;
}

//ciclos
// for -while -dowhile normal

let curso = "Javascript";
let profesor = "Juan Angarita";
//largo
console.log(curso.length);
//indice
console.log(curso.indexOf("a"));
//Subcadena
console.log(curso.includes("Java"));
//Concat
let frase = curso + " de " + profesor;
console.log(frase);
frase = curso.concat(" de ", profesor);
console.log(frase);
console.log(curso, "de", profesor);
console.log(`${curso} de ${profesor}`);
//Trim
let string = "   Javas   cript    ";
console.log(string.trim());
//Replace
console.log(frase.replace("Javascript", "HTML"));
//Letra en una pos
console.log(frase.charAt(0));
//substring (0-4)
console.log(frase.substring(0, 5));
//split
let arre = frase.split(" ");
console.log(arre);

let numero = 10;
let decimal = 10.5;
//No hay diferenciacion en tipos de datos
console.log(typeof numero);
console.log(typeof decimal);

//Libreria Math
console.log(Math.round(10.4));
console.log(Math.ceil(10.4));
console.log(Math.floor(10.4));
console.log(Math.random());
console.log(Math.max(1, 2, 3, 4, 5));
console.log(Math.min(1, 2, 3, 4, 5));

console.log(Math.sqrt(25));
console.log(Math.pow(2, 3));
console.log(Math.random() * 100 + 1); //entre 1 y 100

console.log(Number.parseInt("10"));
console.log(Number.parseFloat("10.5"));
console.log(Number.isInteger(10));

console.log(Number.parseInt("abs")); //Nan casteando numero a no numero
let indef;
console.log(indef); //Si no la inicializo
indef = null;
console.log(indef);

//dif entre == y ===
console.log(10 == "10"); //true    //solo valor interno
console.log(10 === "10"); //false  //valor interno y tipo de dato
console.log(null == undefined); //true
console.log(null === undefined); //false

let arreg = [1, 2, 3];
console.log(arreg);
let arremixto = [1, "hola", true, null, { a: 1, b: 2 }];
console.log(arremixto);

const numeros = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(numeros);
console.table(numeros); //mas bonito

const meses = ["Enero", "Febrero", "Marzo"];
meses.push("Abril"); //agrega al final
console.log(meses);

meses.unshift("Mayo"); //agrega al inicio
console.log(meses);

meses.pop(); //elimina el ultimo
console.log(meses);

meses.shift(); //elimina el primero
console.log(meses);

let algumeses = meses.splice(1, 2); //elimina el 1 y 2
//Desde la pos 1 elimina 2
console.log(algumeses); //como un duplicado con los datos que se eliminaron
console.log(meses);

//Concat arreglos
let pares = [2, 4, 6];
let impares = [1, 3, 5];
let todos = pares.concat(impares);
console.log(todos);
//forma declarativa
let todos2 = [...pares, "ultimo"];
console.log(todos2);

//for each
todos.forEach(function (elemento) {
  console.log(elemento);
});

//for of y for in
for (let elemento of todos) {
  console.log(elemento); //imprime valor
}
for (let elemento in todos) {
  console.log(elemento); //imprime iterador
}

//map
let arrmod = todos.map(function (elemento) {
  return elemento * 2; //deja modificar los elementos
});
console.log(arrmod);
