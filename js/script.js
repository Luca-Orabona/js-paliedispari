// // Palidroma

// const parolaUtente = prompt("Scrivi una parola", "cane");
// console.log(parolaUtente);

// function parolaPalindroma() {

//     let parolaContrario = "";

//     // Costruisco la parola al contrario
//     for (let i = parolaUtente.length - 1; i >= 0; i--) {
//         parolaContrario = parolaContrario + parolaUtente[i];
//         console.log(parolaContrario);
//     }

//     // Confronto le due parole
//     if (parolaUtente === parolaContrario) {
//         return true;
//     } else {
//         return false;
//     }
// }

// let parola = parolaPalindroma();
// console.log("È palindroma?", parola);


// Pari o dispari

// 1. L'utente sceglie pari o dispari
const userPariDispari = prompt("Pari o Dispari?", "dispari");


// 2. L'utente sceglie un numero da 1 a 5
const userNum = parseInt(prompt("Scegli un numero da 1 a 5", 4));
console.log("Numero utente:", userNum);


// 3. Funzione per generare numero random da 1 a 5
function numRandom() {
    const numRandom = Math.floor(Math.random() * 5) + 1;
    return numRandom;
}

// 5. Generiamo il numero random del computer
const pcNum = numRandom();
console.log("Numero computer:", pcNum);


// 6. Sommiamo i numeri
const somma = userNum + pcNum;
console.log("Somma:", somma);


// 4. Funzione per controllare se un numero è pari
function numPari(number) {
    return number % 2 === 0;
}

// 7. Controlliamo se la somma è pari o dispari
let sommaPariDispari;

if (numPari(somma)) {
    sommaPariDispari = "pari";
} else {
    sommaPariDispari = "dispari";
}

console.log("La somma è:", sommaPariDispari);


// 8. Stabilire chi ha vinto
if (userPariDispari === sommaPariDispari) {
    console.log("Hai vinto!");
} else {
    console.log("Ha vinto il computer!");
}


