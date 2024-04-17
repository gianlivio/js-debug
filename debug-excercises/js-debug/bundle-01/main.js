/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
for (let i = 0; i > 5; i++) {
    console.log(i);
}
// con questo codice si intende stampare dei numeri in console. Non ci sono errori sintattici ma logici. La condizione i > 5 impone di stampare i numeri maggiori di 5 ma i inizia da 0. mettendo i<5 in console verranno stampati i numeri da 0 a 4.

// ESERCIZIO 2
function addIfEven(num) {
    if (num % 2 = 0) {
        return num + 5;
    }
    return num;
}
// funzione che stampa il num dispari else, se parseInt, stampa quel num+5. Errore sintattico: = (assegnamento) usato al posto di === 

// ESERCIZIO 3
function loopToFive() {
    for (let i = 0, i < 5, i++) {
        console.log(i);
    }
}
// la funzione esegue un ciclo for che stampa i num da 0 a 4 in console. Tuttavia c'è un errore sintattico, le virgole al posto del ;

// ESERCIZIO 4 (suggerimento: ci sono 7 errori)
function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];
    for (let i = 0; i < numbers.length - 1; i++;) {
        if (numbers % 2 = 0); {
            evenNumbers.push(i);
        }
        return evenNumbers;
    }
}
displayEvenNumbers(); // dovrebbe restituire [2,4,6,8]

la funzione itera un array di numeri e ne restituisce solo quelli parseInt. Errori sintattici: 
- ; dopo i++
- ; dopo (numbers % 2 = 0)
- -1 dopo number.length
- l'= di (numbers % 2 = 0) dovrebbe essere ===
- in (numbers % 2 = 0) essendo numbers un array, dovrebbe essere piuspecifico ed esprimersiconnumbers[i]
- evenNumbers dovrebbe pushare numbers[i] e non (i)
- il return è dentro il ciclo for, dovrebbe posizionarsi fuori