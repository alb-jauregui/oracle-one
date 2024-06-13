// //Variables
// let numeroSecreto = 4;
// let numeroUsuario = 0;
// let intentos = 1;
// let palabraVeces = 'vez';

// while (numeroUsuario != numeroSecreto) {
//     numeroUsuario = prompt("Me indicas un número entre 1 y 10 por favor:");

//     console.log(numeroUsuario);
//     if (numeroUsuario == numeroSecreto) {
//         //Acertamos, fue verdadera la condición
//         alert(`Acertaste, el número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${palabraVeces}`);
//     } else {
//         if (numeroUsuario > numeroSecreto) {
//             alert('El número secreto es menor');
//         } else {
//             alert('El número secreto es mayor');
//         }
//         //Incrementamos el contador cuando no acierta
//         intentos = intentos + 1;
//         palabraVeces = 'veces';
//         //La condición no se cumplió
//         //alert('Lo siento, no acertaste el número');
//     }
// }

// Indicamos cual es el numero secreto
let numeroSecreto = 4;

// Iniciamos el numero ingresado y el numero de intentos
let numeroUsuario = 0;
let intentos = 1;
let pluralOSingular = 'intento';

// Iniciamos un ciclo que termine cuando los numeros sean iguales
while (numeroUsuario != numeroSecreto) {

  // Le pedimos un numero al usuario y modificamos su valor inicial con el ingresado
  numeroUsuario = prompt('Indicame un numero entre 1 y 10:')

  // Imprimimos en consola el valor del numero ingresado para verificar que se guardo
  console.log(numeroUsuario);

  // Realizamos la comparacion e indicamos si gano
  if (numeroUsuario == numeroSecreto) {
    // Si la condicion es verdadera, pasa esto:
    alert(`Acertaste, el numero secreto es: ${numeroSecreto} y lo lograste en ${intentos} ${pluralOSingular}.`);
    // Si la condicion es falsa, pasa esto:
  } else {
    // Esto es un if-else inidado
    if (numeroUsuario > numeroSecreto) {
      alert('Fallaste, el numero secreto es menor.')
    } else {
      alert(`Fallaste, el numero secreto es mayor.`);
    }
    intentos++;
    pluralOSingular = 'intentos'
  }
}
