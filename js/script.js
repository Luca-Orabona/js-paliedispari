const parolaUtente = prompt("Scrivi una parola", "cane");
console.log(parolaUtente);

function parolaPalindroma() {

    let parolaContrario = "";

    // Costruisco la parola al contrario
    for (let i = parolaUtente.length - 1; i >= 0; i--) {
        parolaContrario = parolaContrario + parolaUtente[i];
        console.log(parolaContrario);
    }

    // Confronto le due parole
    if (parolaUtente === parolaContrario) {
        return true;
    } else {
        return false;
    }
}

let parola = parolaPalindroma();
console.log("È palindroma?", parola);