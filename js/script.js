// Descrizione:
// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// Genero casualmente 5 numeri da visualizzare all'utente

const maxNum = 100;

const numArray = [];

for (let i = 0; i < 5; i++) {

    newNum = getRndInteger(1, maxNum);

    if ( !numArray.includes(newNum)) {
        numArray.push(newNum);
    }

}

console.log(numArray);

// Stampiamo nell'HTML i numeri generati casualmente

generatedNum = document.getElementById("generatednum").innerHTML = `I tuo numeri sono: ${numArray}`;

const countContainer = document.getElementById("countdown");

const countText = document.getElementById("counttext");

let count = 31;

// Ogni secondo devo decrementare il count e scrivere il nuovo numero nel countContainer
const timer = setInterval(function(){
    count--;
    if (count <= 0) {
        // Al termine del timer, i numeri spariscono e viene stampata la frase "Tempo terminato"
        clearInterval(timer);
        countContainer.innerHTML = "";
        document.getElementById("generatednum").classList.add("d-none");
        countText.innerHTML = "Tempo terminato";
    } else {
        countContainer.innerHTML = count;
    }
}, 1000);

setTimeout(userNum, 33000);

// FUNCTIONS

// UTILITY FUNCTIONS

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

// DOM FUNCTIONS

/**
 * Description -> funzione che richiede all'utente 5 numeri e controlla se i seguenti numeri si trovani all'interno dell'array di numeri generati, se si li inserisce nel risultato
 * @returns {any}
 */
function userNum() {

    // Crea un array di numeri inseriti dall'utente
    const userNumArray = [];
    for ( let i = 0; i < numArray.length; i++) {
        newUserNum = parseInt(prompt("Inserisci uno dei numeri"));

        userNumArray.push(newUserNum);
        
    }

    userArray = userNumArray;

    console.log(userNumArray);

    // Controlla se i numeri inseriti dall'utente sono presenti all'interno dell'array di numeri generati
    const correctNum = [];

    for (let i = 0; i <= numArray.length; i++) {

        // Se si, i numeri vengono inseriti in un array di numeri corretti
        if (numArray.includes(userNumArray[i])) {
            correctNum.push(userNumArray[i]);
        }

    }

    console.log(correctNum);

    // Viene stampato come output l'array di numeri corretti con il numero di elementi presenti all'interno
    result = document.getElementById("result").innerHTML = `Hai indovinato ${correctNum.length} numeri: ${correctNum}`;

}