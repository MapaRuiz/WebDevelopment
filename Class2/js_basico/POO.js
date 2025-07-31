//object literal
const estudiante = {
  nombre: "Juan",
  apellido: "Perez",
  edad: 20,
};
console.log(estudiante);
console.log(estudiante.apellido);
console.log(estudiante["apellido"]);

estudiante.carrera = "Informatica";
console.log(estudiante);
delete estudiante.carrera;
console.log(estudiante);

console.log(`El estudiante ${estudiante.nombre} tiene ${estudiante.edad} años`);

//destructuring
const { nombre, edad } = estudiante;
console.log(`el estudiante ${nombre} tiene ${edad} años`);

//objetos anidados
const curso = {
  nombre: "Javascript",
  profesor: {
    nombre: "Juan",
    apellido: "Angarita",
    edad: 28,
  },
};
console.log(curso.profesor.nombre);
curso.profesor.edad = 30; //se puede modificar asi tenga const
console.log(curso.profesor.edad);

//metodos o fnc
const alumno = {
  nombre: "Ana",
  apellido: "Lopez",
  saludar: function () {
    console.log(`Hola, soy ${this.nombre} ${this.apellido}`);
  },
};
alumno.saludar();

//constructor
function Estudiante(nombre, apellido, edad) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.edad = edad;
  this.saludar = function () {
    console.log(`Hola, soy ${this.nombre} ${this.apellido}`);
  };
}

const estudiante2 = new Estudiante("Juan", "Perez", 20);
console.log(estudiante2);
estudiante2.saludar();

console.log(Object.keys(estudiante2)); //llave
console.log(Object.values(estudiante2)); //valor
console.log(Object.entries(estudiante2)); //llave y valor

//Array methods

const estudiantes = [
  { nombre: "Juan", apellido: "Perez", edad: 20 },
  { nombre: "Ana", apellido: "Lopez", edad: 22 },
  { nombre: "Pedro", apellido: "Gomez", edad: 19 },
];

const meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

let encontrado = meses.includes("Enero");
console.log(encontrado); //true

encontrado = estudiantes.some((estudiante) => estudiante.edad > 21);
console.log(encontrado); //true

encontrado = meses.indexOf("Enero");
console.log(encontrado); //0

encontrado = estudiantes.findIndex((estudiante) => estudiante.edad > 21);
console.log(encontrado); //1

const total = estudiantes.reduce((acumulador, estudiante) => {
  return acumulador + estudiante.edad;
}, 0); //0 es el valor inicial
console.log(total);

const mayores = estudiantes.filter((estudiante) => estudiante.edad >= 21);
console.log(mayores); //devuelve arreglos

let resultado = estudiantes.filter((estudiante) => {
  return estudiante.nombre !== "Juan";
});
console.log(resultado); //devuelve arreglo sin Juan

resultado = estudiantes.find((estudiante) => {
  return estudiante.edad >= 21;
});
console.log(resultado); //devuelve el primer estudiante mayor de 21

//prototipos
function Perro(nombre, raza, edad) {
  this.nombre = nombre;
  this.raza = raza;
  this.edad = edad;
  this.saludar = function () {
    console.log(`${this.nombre} dice: ¡Guau!`);
  };
}

const miPerro = new Perro("Rex", "Labrador", 3);
console.log(miPerro);
miPerro.saludar(); // Rex dice: ¡Guau!

function Gato(nombre, raza, edad) {
  this.nombre = nombre;
  this.raza = raza;
  this.edad = edad;
}

Gato.prototype.saludar = function () {
  console.log(`${this.nombre} dice: ¡Miau!`);
};

const miGato = new Gato("Miau", "Persa", 2);
console.log(miGato);
miGato.saludar(); // Miau dice: ¡Miau!

function Gatito(nombre, raza, edad, color) {
  Gato.call(this, nombre, raza, edad); // Llama al constructor de Gato
  this.color = color;
}

const miGatito = new Gatito("Mimi", "Siames", 1, "Blanco");
console.log(miGatito);
Gatito.prototype = Object.create(Gato.prototype); // Hereda de Gato
const miGatito2 = new Gatito("Mimi", "Siames", 1, "Blanco");
console.log(miGatito2);
miGatito2.saludar(); // Mimi dice: ¡Miau!

//Clases

class Empleado {
  constructor(nombre, puesto, salario) {
    this.nombre = nombre;
    this.puesto = puesto;
    this.salario = salario;
  }

  saludar() {
    console.log(`Hola, soy ${this.nombre} y trabajo como ${this.puesto}`);
  }

  static bienvenido() {
    console.log("¡Hola desde la clase Empleado!");
  }
}

const empleado1 = new Empleado("Carlos", "Desarrollador", 50000);
console.log(empleado1);
empleado1.saludar(); // Hola, soy Carlos y trabajo como Desarrollador
Empleado.bienvenido(); // ¡Hola desde la clase Empleado!

class Desarrollador extends Empleado {
  constructor(nombre, salario, lenguaje) {
    super(nombre, "Desarrollador", salario); // Llama al constructor de Empleado
    this.lenguaje = lenguaje;
  }

  programar() {
    console.log(`${this.nombre} está programando en ${this.lenguaje}`);
  }
}

const dev1 = new Desarrollador("Ana", 60000, "JavaScript");
console.log(dev1);
dev1.programar();
Desarrollador.bienvenido();

// Encapsulamiento
class Trabajador {
  #nombre;
  #apellido;
  #salario;

  constructor(nombre, apellido, salario) {
    this.#nombre = nombre;
    this.#apellido = apellido;
    this.#salario = salario;
  }

  saludar() {
    console.log(
      `Hola, soy ${this.#nombre} ${this.#apellido} y salario como ${
        this.#salario
      }`
    );
  }

  get nombre() {
    return this.#nombre;
  }
  set nombre(nuevoNombre) {
    this.#nombre = nuevoNombre;
  }
}

const trabajador1 = new Trabajador("Luis", "Gomez", 70000);
console.log(trabajador1);
trabajador1.saludar();
//console.log(trabajador1.#salario);
trabajador1.nombre = "Luisito"; // Cambia el nombre
console.log(trabajador1.nombre); // Luisito
