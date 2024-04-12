/*
// usando la terminal de linux y con el comando node ruta-y-nombre-del-archivo.js-
function celsiusToFahrenheit(celsius) {
    var fahrenheit = 32 + (9 * celsius / 5);
    return fahrenheit;
}

// Ejemplo de uso:
var celsiusValue = 30;
var fahrenheitValue = celsiusToFahrenheit(celsiusValue);
console.log(celsiusValue + " grados Celsius son " + fahrenheitValue + " grados Fahrenheit.");

 */

    

//Usando motor v8 de algùn navegador y solicitando al usuario la informacion de grados a convertir
function celsiusToFahrenheit(celsius) {
    var fahrenheit = 32 + (9 * celsius / 5);
    return fahrenheit;
}

// Pedir al usuario que ingrese los grados Celsius
var celsiusValue = prompt("Ingrese los grados Celsius a convertir a Fahrenheit:");

// Convertir la entrada del usuario a un número
celsiusValue = parseFloat(celsiusValue);

// Verificar si la entrada es un número válido
if (!isNaN(celsiusValue)) {
    var fahrenheitValue = celsiusToFahrenheit(celsiusValue);
    console.log(celsiusValue + " grados Celsius son " + fahrenheitValue + " grados Fahrenheit.");
} else {
    console.log("Por favor, ingrese un valor numérico válido para los grados Celsius.");
}
