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


//Esercizio Palindromo

const wordBox = document.getElementById('word');
const btnSend = document.querySelector('button');

btnSend.addEventListener('click', palindromo);

//funzione per cercare sela parola è palindroma
function palindromo() {
    const word = wordBox.value.toLowerCase().trim().split(" ").join("");
    const wordSplit = word.split("");
    const reverseWord = wordSplit.reverse().join("");
    let message = '';
    let input = '';

    console.log(word);
    console.log(reverseWord);

    if (word === '' || !isNaN(word)) {
        message = 'Il valore inserito è errato'
        document.getElementById('result').innerHTML = `<h2 class="text-danger">${message}</h2>`;
    } else {
        //condizione che verifica se l'utente ha inserito una parola o una frase
        if (wordBox.value.trim().includes(" ")) {
            input = 'frase';
            console.log("La stringa contiene degli spazi");
        } else {
            input = 'parola';
            console.log("La stringa non contiene degli spazi");
        }

        //condizione che verifica se parola/frase è palindroma
        if (word === reverseWord) {
            message = `${wordBox.value} è una ${input} palindroma`;
            console.log(true);
            document.getElementById('result').innerHTML = `<h2>${message}</h2>`;
        } else {
            message = `${wordBox.value} non è una ${input} palindroma`;
            console.log(false);
            document.getElementById('result').innerHTML = `<h2 class="text-danger">${message}</h2>`;
        }
    }
    console.log(message)
}




// Esercizio Pari e Dispari

const selectPariDispari = document.getElementById('pari-dispari');
const selectNum = document.getElementById('num');

const btnPariDispari = document.getElementById('btn-pari-dispari');

btnPariDispari.addEventListener('click', pariDispari);

function pariDispari() {

    const pariDispariValue = selectPariDispari.value;
    const userNum = parseInt(selectNum.value);
    const computerNum = getRndNumber(1, 5);
    const sum = userNum + computerNum;
    let risultato = '';
    let message = '';


    if (sum % 2) {
        risultato = 'dispari';
        console.log('è dispari');
    } else {
        risultato = 'pari';
        console.log('è pari');
    }

    if (risultato === pariDispariValue) {
        message = `Hai vinto!!! Il risultato è ${risultato} :)`;
        document.getElementById('message').innerHTML = `<h2>${message}</h2>`;
    } else {
        message = `Hai perso! Il risultato è ${risultato} :(`;
        document.getElementById('message').innerHTML = `<h2 class="text-danger">${message}</h2>`;

    }

    console.log(message);
    console.log(pariDispariValue);
    console.log(userNum);
    console.log(computerNum);

    document.getElementById('message').innerHTML += `<p class="text-warning">Hai scelto ${selectPariDispari.value} e ${userNum}</p>
    <p class="text-warning">Il computer ha scelto ${computerNum}</p>
    <p class="text-warning">La somma è ${sum}</p>`;
}


