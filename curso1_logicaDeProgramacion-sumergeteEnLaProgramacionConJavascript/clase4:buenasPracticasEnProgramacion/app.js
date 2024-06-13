// //Variables
// let numeroSecreto = Math.floor(Math.random()*10)+1;
// let numeroUsuario = 0;
// let intentos = 1;
// //let palabraVeces = 'vez';
// let maximosIntentos = 3;


// while (numeroUsuario != numeroSecreto) {
//     numeroUsuario = parseInt(prompt("Me indicas un número entre 1 y 10 por favor:"));

//     console.log(typeof(numeroUsuario));
//     if (numeroUsuario == numeroSecreto) {
//         //Acertamos, fue verdadera la condición
//         alert(`Acertaste, el número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces' }`);
//     } else {
//         if (numeroUsuario > numeroSecreto) {
//             alert('El número secreto es menor');
//         } else {
//             alert('El número secreto es mayor');
//         }
//         //Incrementamos el contador cuando no acierta
//         //intentos = intentos + 1;
//         //intentos += 1;
//         intentos++;

//         //palabraVeces = 'veces';
//         if (intentos > maximosIntentos) {
//             alert(`Llegaste al número máximo de ${maximosIntentos} intentos`);
//             break;
//         }
//         //La condición no se cumplió
//         //alert('Lo siento, no acertaste el número');
//     }
// }

// La maquina genera un numero secreto aleatorio
let numeroSecreto = Math.floor(Math.random() * 10) + 1;
console.log(numeroSecreto);

// Iniciamos el numero ingresado y el numero maximo de intentos
let numeroUsuario = 0;
let intentos = 0;
let maximosIntentos = 3;

// Iniciamos un ciclo que termine cuando los numeros sean iguales
while (numeroUsuario != numeroSecreto) {
  intentos++;

  // Le pedimos un numero al usuario y modificamos su valor inicial con el ingresado
  numeroUsuario = parseInt(prompt('Indicame un numero entre 1 y 10:'));

  // Imprimimos en consola el valor del numero ingresado para verificar que se guardo
  console.log(numeroUsuario);

  // Realizamos la comparacion e indicamos si gano
  if (numeroUsuario == numeroSecreto) {
    // Si la condicion es verdadera, pasa esto:
    alert(`Acertaste, el numero secreto es: ${numeroSecreto} y lo lograste en ${intentos} ${intentos == 1 ? 'intento' : 'intentos'}.`);
    // Si la condicion es falsa, pasa esto:
  } else {
    // Esto es un if-else inidado
    if (numeroUsuario > numeroSecreto) {
      alert('Fallaste, el numero secreto es menor.')
    } else {
      alert(`Fallaste, el numero secreto es mayor.`);
    }
    if (intentos == maximosIntentos) {
      alert(`Lo siento, llegaste al numero maximo de ${maximosIntentos} intentos. Fin del juego.`);
      break;
    }
  }
}
