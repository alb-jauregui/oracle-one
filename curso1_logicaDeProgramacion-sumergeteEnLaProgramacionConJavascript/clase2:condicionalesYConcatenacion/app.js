// Indicamos cual es el numero secreto
let numeroSecreto = 2;

// Le pedimos un numero al usuario
let numeroUsuario = prompt('Indicame un numero entre 1 y 10:')

console.log(numeroUsuario);

// Realizamos la comparacion e indicamos si gano
if (numeroUsuario == numeroSecreto){
    // Si la condicion es verdadera, pasa esto:
    alert(`Acertaste, el numero secreto es: ${numeroSecreto}`);
} else {
    // Si la condicion es falsa, pasa esto:
    alert(`Fallaste, el numero secreto es: ${numeroSecreto}`);
}

// //Variables
// let numeroSecreto = 2;
// let numeroUsuario = prompt("Me indicas un número entre 1 y 10 por favor:");

// console.log(numeroUsuario);
// /*
// Este código realiza
// la comparación
// */
// if (numeroUsuario == numeroSecreto) {
//     //Acertamos, fue verdadera la condición
//     alert(`Acertaste, el número es: ${numeroUsuario}`);
// } else {
//     //La condición no se cumplió
//     alert('Lo siento, no acertaste el número');
// }
