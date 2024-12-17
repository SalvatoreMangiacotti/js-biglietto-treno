//ESERCIZIO DA SVOLGERE

// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// - il prezzo del biglietto è definito in base ai km(0.21 € al km)
// - va applicato uno sconto del 20 % per i minorenni
// - va applicato uno sconto del 40 % per gli over 65.
// - L’output del prezzo finale va messo fuori in forma umana(con massimo due decimali, per indicare centesimi sul prezzo).
// Questo richiederà un minimo di ricerca.



//PUNTI DELLA TRACCIA

// - prompt , età del passeggero & numero di km da percorrere
// - output , prezzo totale del viaggio, max 2 cifre decimali
// - 0.21 € * km
// - sconto 18- , 20%
// - sconto 65+ , 40%



//ESECUZIONE DELL'ESERCIZIO

// Dichiarazione variabili , input
let distanceToTravel = parseInt(prompt("Inserisci il numero di chilometri da percorrere"));
let userAge = parseInt(prompt("Inserisci la tua età"));
let totalPrice;

console.log(distanceToTravel, userAge);

// Calcolo prezzo del biglietto esclusi sconti applicabili
let ticketPrice = distanceToTravel * 0.21;

console.log(ticketPrice);

// Funzioni e condizioni, elaborazione

if (userAge < 18) {

    // Calcolo dello sconto applicabile
    let discount = (ticketPrice * 20) / 100;

    // Prezzo totale con sconto applicato
    totalPrice = ticketPrice - discount;

} else if (userAge >= 65) {

    // Calcolo dello sconto applicabile
    let discount = (ticketPrice * 40) / 100;

    // Prezzo totale con sconto applicato
    totalPrice = ticketPrice - discount;

} else {
    
    // Se l'utente ha una età compresa tra i 18 e i 65 anni non verrà applicato alcuno sconto
    totalPrice = ticketPrice;

}

// Risultato, output

console.log(`Il costo totale del biglietto sarà di: ${totalPrice} €`);