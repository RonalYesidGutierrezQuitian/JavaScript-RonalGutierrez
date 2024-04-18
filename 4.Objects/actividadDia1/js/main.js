let textColor = `#33FF66`
// Definición de un objeto persona
console.log(`%c\nDefinición de un objeto persona:`, `color: ${textColor}`)
const persona = {
    nombre: `Juan`,
    edad: 30,
    genero: `masculino`,
    ocupacion: `programador`
  };
  
  // Accediendo a las propiedades de la persona
  console.log(persona.nombre); // Juan
  console.log(persona.edad); // 30
  console.log(persona.genero); // masculino
  console.log(persona.ocupacion); // programador
  console.log(persona)
  console.log(``)
//_____________________________________________________________________________________________________________________________


// Definición de un objeto coche
console.log(`%c\nDefinición de un objeto coche:`, `color: ${textColor}`);
const car = {
    marca: `Toyota`,
    modelo: `Corolla`,
    año: 2020,
    color: `rojo`
  };
  
  // Accediendo a las propiedades del coche
  console.log(car.marca); // Toyota
  console.log(car.modelo); // Corolla
  console.log(car.año); // 2020
  console.log(car.color); // rojo
  console.log(car)
  
  console.log(``)
//_____________________________________________________________________________________________________________________________


// Definición de un objeto libro
console.log(`%c\nDefinición de un objeto libro:`, `color: ${textColor}`);
const libro = {
    titulo: `Cien años de soledad`,
    autor: `Gabriel García Márquez`,
    añoPublicacion: 1967,
    genero: `realismo mágico`
  };
  
  // Accediendo a las propiedades del libro
  console.log(libro.titulo); // Cien años de soledad
  console.log(libro.autor); // Gabriel García Márquez
  console.log(libro.añoPublicacion); // 1967
  console.log(libro.genero); // realismo mágico
  console.log(libro)
  console.log(``)
//_____________________________________________________________________________________________________________________________


// Definición de una variable número
console.log(`%c\nDefinición de una variable número:`, `color: ${textColor}`);
const numero = 42;

console.log(numero); // 42
console.log(``)
//_____________________________________________________________________________________________________________________________


// Definición de una función
console.log(`%c\nDefinición de una función:`, `color: ${textColor}`);
function suma(a, b) {
    return a + b;
  }
  // Utilizando la función
  console.log(suma(5, 3)); // 8
  console.log(suma)
  