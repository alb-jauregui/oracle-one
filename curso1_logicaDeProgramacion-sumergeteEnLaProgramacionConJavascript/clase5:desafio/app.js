// //Variables
// let numeroMaximoPosible = 100;
// let numeroSecreto = Math.floor(Math.random()*numeroMaximoPosible)+1;
// let numeroUsuario = 0;
// let intentos = 1;
// //let palabraVeces = 'vez';
// let maximosIntentos = 6;


// while (numeroUsuario != numeroSecreto) {
//     numeroUsuario = parseInt(prompt(`Me indicas un número entre 1 y ${numeroMaximoPosible}  por favor:`));

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

// Iniciamos nuestras variables
let numeroUsuario = 0;
let intentos = 0;
let maximosIntentos = 3;
let rango = prompt('Ingrese el rango maximo del numero secreto (10, 1000, 10000, etc.)')
// La maquina genera un numero secreto aleatorio dentro del rango indicado por el usuario
let numeroSecreto = Math.floor(Math.random() * rango) + 1;
console.log(numeroSecreto);

// Iniciamos un ciclo que termine cuando los numeros sean iguales o cuando se llega al numero maximo de intentos
while (numeroUsuario != numeroSecreto) {

  // Sumamos un intento a la variable intentos
  intentos++;

  // Le pedimos un numero al usuario y modificamos su valor inicial con el ingresado
  numeroUsuario = parseInt(prompt(`Indicame un numero entre 1 y ${rango}:`));
  console.log(numeroUsuario);

  // Realizamos la comparacion e indicamos si gano, si fallo y si el numero secreto es mayor o menor
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

    // Si se llega al numero maximo de intentos el juego termina
    if (intentos == maximosIntentos) {
      alert(`Lo siento, llegaste al numero maximo de ${maximosIntentos} intentos. El numero secreto es: ${numeroSecreto}`);
      break;
    }
  }
}
