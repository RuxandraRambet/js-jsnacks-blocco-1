'use strict';

// Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.

let result = 0;

// nr richiesti all'user
 let count = 10;

 for (let i = 1; i <= 10; i++) {
    const currentNumer = Number(prompt(`${i} = Inserisci un numero`));
    if(!isNaN(currentNumer)) {
        console.log(`${i} = Hai inserito il nr ${currentNumer}`);
        result += currentNumer;
        console.log(`${i} = La somma a questo punto è: ${result}`);
    }else {
        console.log(`${i} = Hai inserito un valore non numerico`);
    }
 }

 console.log('la somma di tutti i numeri è: ', result)