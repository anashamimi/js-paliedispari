/*
Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/


const wordBox = document.getElementById('word');
const btnSend = document.querySelector('button');

btnSend.addEventListener('click', palindromo);

//funzione per cercare sela parola è palindroma
function palindromo() {
    const word = wordBox.value.split(" ").join("");
    const wordSplit = word.split("");
    const reverseWord = wordSplit.reverse().join("");
    let message = '';
    let input = '';

    console.log(word);
    console.log(reverseWord);

    //condizione che verifica se l'utente ha inserito una parola o una frase
    if (wordBox.value.includes(" ")) {
        input = 'frase';
        console.log("La stringa contiene degli spazi");
    } else {
        input = 'parola';
        console.log("La stringa non contiene degli spazi");
    }

    //condizione che verifica se parola/frase è palidroma
    if (word === reverseWord) {
        message = `${wordBox.value} è una ${input} palidroma`;
        console.log(true);
    } else {
        message = `${wordBox.value} non è una ${input} palidroma`;
        console.log(false);
    }

    console.log(message)
}