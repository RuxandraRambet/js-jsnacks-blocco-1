
// Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. 
// Continua a chiedere i numeri all’utente e a inserirli nell’array fino
//  a quando la somma degli elementi è inferiore di 50.


const array = []; //creo un array vuoto
let sum = 0; // creo variabile per la somma

while(sum < 50){
    const number = Number(prompt('Inserisci un numero')); // chiedo all'utente di inserire un nr
    array.push(number)//pusho il nr nell'array
    sum += number // aggiungo il nr alla somma
    console.log(`Array: ${array}`);
    console.log(`Somma: ${sum}`);
}

console.log('A questo punto la somma è uguale o maggiore di 50');


