// Crea un programa que utilice console.log para mostrar un mensaje de bienvenida.
console.log('Bienvenido');

// Crea una variable llamada "nombre" y asígnale tu nombre.Luego, utiliza console.log para mostrar el mensaje "¡Hola, [tu nombre]!" en la consola del navegador.
let nombre = 'alberto';
console.log(`Hola, ${nombre}`);

// Crea una variable llamada "nombre" y asígnale tu nombre.Luego, utiliza alert para mostrar el mensaje "¡Hola, [tu nombre]!".
let nombre2 = 'alberto';
alert(`Hola, ${nombre2}`);

// Utiliza prompt y haz la siguiente pregunta: ¿Cuál es el lenguaje de programación que más te gusta?.Luego, almacena la respuesta en una variable y muestra la respuesta en la consola del navegador.
let lenguaje = prompt('?Cual es el lenguaje de programacion que mas te gusta?');
console.log(lenguaje);

// Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección.Luego, realiza la suma de estos dos valores y almacena el resultado en una tercera variable llamada "resultado".Utiliza console.log para mostrar el mensaje "La suma de [valor1] y [valor2] es igual a [resultado]." en la consola.
let valor1 = 5, valor2 = 3;
let resultado = valor1 + valor2;
console.log(`La suma de ${valor1} y ${valor2} es igual a ${resultado}.`)

// Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección.Luego, realiza la resta de estos dos valores y almacena el resultado en una tercera variable llamada "resultado".Utiliza console.log para mostrar el mensaje "La diferencia entre [valor1] y [valor2] es igual a [resultado]." en la consola.
let valor3 = 5, valor4 = 3;
let resultado2 = valor3 - valor4;
console.log(`La diferencia entre ${valor3} y ${valor4} es igual a ${resultado2}.`)

// Pide al usuario que ingrese su edad con prompt.Con base en la edad ingresada, utiliza un if para verificar si la persona es mayor o menor de edad y muestra un mensaje apropiado en la consola.
let edad = prompt('Ingrese su edad:');
if (edad > 18) {
  console.log('Usted es mayor de edad.');
} else {
  console.log('Usted es menor de edad.')
}

// Crea una variable "numero" y solicita un valor con prompt.Luego, verifica si es positivo, negativo o cero utilizando un if-else y muestra el mensaje correspondiente.
let numero = prompt('Ingrese un numero:');
if (numero > 0) {
  console.log('El numero ingresado es positivo.');
} else if (numero == 0) {
  console.log('El numero ingresado es cero.');
} else {
  console.log('El numero ingresado es negativo.');
}

// Utiliza un bucle while para mostrar los números del 1 al 10 en la consola.
let contador = 0;
while (contador != 10) {
  contador++;
  console.log(contador);
}

// Crea una variable "nota" y asígnale un valor numérico.Utiliza un if-else para determinar si la nota es mayor o igual a 7 y muestra "Aprobado" o "Reprobado" en la consola.
let nota = 5;
if (nota >= 7) {
  console.log('Aprobado.');
} else {
  console.log('Desaprobado.')
}

// Utiliza Math.random para generar cualquier número aleatorio y muestra ese número en la consola.
console.log(Math.random());

// Utiliza Math.random para generar un número entero entre 1 y 10 y muestra ese número en la consola.
console.log(Math.floor(Math.random() * 10 + 1));

// Utiliza Math.random para generar un número entero entre 1 y 1000 y muestra ese número en la consola.
console.log(Math.floor(Math.random() * 1000 + 1));
