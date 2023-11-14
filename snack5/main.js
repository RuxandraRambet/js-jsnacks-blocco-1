'use strict';

// Fai inserire un numero, che chiameremo N, all’utente.
// Genera N array, ognuno formato da 10 numeri casuali tra 1 e 100.
//  Ogni volta che ne crei uno, stampalo a schermo.

const N = Number(prompt('Inserisci un numero')); //chiedo il numero con un prompt

// ciclo per n volte 
for(let i = 1; i <= N; i++){
    const array = [];
    //genero 10 nr random con un ciclo che serve appunto per inserire i nr nell'array
    for(let j = 0; j < 10; j++){
        let randomNumber = Math.floor(Math.random() * 100) + 1; //genero numeri random
        array.push(randomNumber); //pusho i numeri nell'array
    }
    console.log(`l'array ${i} è composto dai seguenti numeri: ${array}`)
}
