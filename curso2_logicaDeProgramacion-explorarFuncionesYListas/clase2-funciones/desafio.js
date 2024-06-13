// Crear una función que muestre "¡Hola, mundo!" en la consola.
function holaMundo() {
  console.log('Hola Mundo')
}
holaMundo();

// Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.
function holaNombre(nombre) {
  console.log(`Hola ${nombre}`)
}
holaNombre('alberto')

// Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
function doble(numero) {
  console.log(numero * 2)
}
doble(5);

// Crear una función que reciba tres números como parámetros y devuelva su promedio.
function promedio(uno, dos, tres) {
  console.log((uno + dos + tres) / 3)
}
promedio(1, 2, 3);

// Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
function mayor(uno, dos) {
  if (uno > dos) {
    console.log(uno)
  } else {
    console.log(dos)
  }
}
mayor(1, 2)

// Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.
function cuadrado(numero) {
  console.log(numero * numero)
}
cuadrado(2)
