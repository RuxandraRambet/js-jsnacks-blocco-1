'use strict';

// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.

const parolaUno = prompt('Inserisci la prima parola');
const parolaDue = prompt('Inserisci la seconda parola');

console.log(parolaUno, parolaDue);

// Salvo in 2 var i numeri di caratteri delle parole
const lunghezzaParolaUno = parolaUno.length;
const lunghezzaParolaDue = parolaDue.length;

if (lunghezzaParolaUno > lunghezzaParolaDue) {
    console.log ('La parola più corta è: ', parolaDue);
}else if (lunghezzaParolaUno < lunghezzaParolaDue){
    console.log ('La parola più corta è: ', parolaUno);
}else {
    console.log ('Le parole hanno la stessa lunghezza');
}

