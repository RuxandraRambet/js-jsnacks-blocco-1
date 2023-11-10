'use strict';

// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.

const parolaUno = prompt('Inserisci la prima parola');
const parolaDue = prompt('Inserisci la seconda parola');

// Salvo in 2 var i numeri di caratteri delle parole
const lunghezzaParolaUno = parolaUno.length;
const lunghezzaParolaDue = parolaDue.length;

if (lunghezzaParolaUno > lunghezzaParolaDue) {
    console.log (parolaDue);
}else if (lunghezzaParolaUno < lunghezzaParolaDue){
    console.log (parolaUno);
}else {
    console.log ('Le parole hanno la stessa lunghezza');
}

