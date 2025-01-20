
//task - Età del passeggero
const age = document.getElementById("age");
//task - numero di chilometri da percorrere
const km = document.getElementById("km");


////  - applicato uno sconto del 20% per i minorenni
//// if (age < 18) {
////     price -= price * 0.2;
////     console.log(`in quanto minorenne costo biglietto =  ${price.toFixed(2)} € `);
////      sconto del 40% per gli over 65.
//// } else if (age >= 65) {
////     price *= .6;
////     console.log(`in quanto over 65 costo biglietto = ${price.toFixed(2)} €`);
//// } else {
////      prezzo tariffa standard
////     console.log(`il prezzo del biglietto è di ${price.toFixed(2)} €`);
//// }

// task MILESTONE 1:
// Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati),
//  realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.

const btn = document.getElementById("btn");
const ticket = document.getElementById("ticket");

btn.addEventListener("click", () => {
    let età = age.value;
    let distance = km.value;
    let price = distance * .21; //fixed! questo ve DENTRO per forza sennò distance non funziona!

    //* if ternario con meccanismo applicazione sconto e stampa prezzo DENTRO a ticket
    (età < 18) ? (price -= price * 0.2, ticket.innerHTML = `il prezzo è ${price} €`)
        : (età >= 65) ? (price *= .6, ticket.innerHTML = `il prezzo è ${price} €`)
            : (price, ticket.innerHTML = `il prezzo è ${price} €`);
    return console.log(ticket);
}
)



//task MILESTONE 2:
// Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
// Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.

//task MILESTONE 3:
// Ora che la logica è funzionante in pagina, possiamo andare a dedicarci allo stile, raffinando la parte di HTML e CSS in modo da renderla esteticamente gradevole.







