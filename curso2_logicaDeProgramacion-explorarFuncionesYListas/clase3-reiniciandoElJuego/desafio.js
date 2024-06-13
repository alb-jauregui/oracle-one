// Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.
// let altura = prompt('Ingrese su altura.');
// let peso = prompt('Ingrese su peso.');
// let imc = peso / (altura * altura);
// alert('Tu IMC es: ' + imc);

// Crea una función que calcule el valor del factorial de un número pasado como parámetro.
// let numero = prompt('Ingrese un numero.');
// let i = 2;
// let factorial = 1;
// while (i <= numero) {
//   factorial *= i;
//   i++;
// }
// alert(`El factorial de ${numero} es: ${factorial}`)

// Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.
// let dolares = prompt('Ingrese valor.');
// let reales = dolares * 4.8;
// alert(`${dolares} dolares equivalen a ${reales} reales brasileños.`)

// Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la anchura que se proporcionarán como parámetros.
// let altura = prompt('Ingrese la altura de su sala en m.');
// let anchura = prompt('Ingrese la anchura de su sala en m.');
// let area = altura * anchura;
// let perimetro = (altura * 2) + (anchura * 2);
// alert(`Su sala tiene un perimetro de ${perimetro}m y un area de ${area}m^2`)

// Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.
// let pi = 3.14;
// let radio = prompt('Ingrese el radio de su sala.');
// let perimetro = 2 * pi * radio;
// let area = pi * (radio ** 2);
// alert(`Su sala tiene un perimetro de ${perimetro}m y un area de ${area}m^2`)

// Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.
let numero = prompt('Ingrese un numero.');
let i = 1;
while (i <= 10) {
  let multiplicacion = numero * i;
  alert(`${numero} x ${i} = ${multiplicacion}`);
  i++;
}
