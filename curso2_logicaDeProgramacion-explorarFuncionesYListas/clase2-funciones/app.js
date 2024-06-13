// let numeroSecreto = generarNumeroSecreto();
// let intentos = 0;

// console.log(numeroSecreto);

// function asignarTextoElemento(elemento, texto) {
//     let elementoHTML = document.querySelector(elemento);
//     elementoHTML.innerHTML = texto;
//     return;
// }

// function verificarIntento() {
//     let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

//     if (numeroDeUsuario === numeroSecreto) {
//         console.log('Acertaste el número!');
//     } 
//     return;
// }


// function generarNumeroSecreto() {
//     return Math.floor(Math.random()*10)+1;

// }

// asignarTextoElemento('h1','Juego del número secreto!');
// asignarTextoElemento('p',`Indica un número del 1 al 10`);

let titulo = document.querySelector('h1');
titulo.innerHTML = 'Juego del numero secreto';

let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Indica un numero del 1 al 10:';

function verificarIntento() {
  let numeroUsuario = parseInt(document.querySelector('#valorUsuario').value);
  console.log(numeroSetreto)
  console.log(document.querySelector('#valorUsuario').value)
  console.log(numeroSetreto === numeroUsuario);
}

function cambios(etiqueta, cambio) {
  document.querySelector(etiqueta).innerHTML = cambio;
}
cambios('h1', 'esto se cambio');

function generarNumeroSecreto() {
  return (Math.floor(Math.random() * 10 + 1))
}
let numeroSetreto = generarNumeroSecreto();
