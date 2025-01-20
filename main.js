
//task seleziono e inizializzo gli input
// Età del passeggero
let età = document.getElementById("age");
// numero di chilometri da percorrere
let km = document.getElementById("km");
// bottone => output
const btn = document.getElementById("btn");
// span => scrittura risultato output
const ticket = document.getElementById("ticket");

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

//task organizzo l'output con l'eventlistener contenente
//*----- I STEP => RACCOLTA DATI selezionati sopra con l'input!
//*----- II STEP =>  IF + INNERHTML(stampa) risultato in ticket!
btn.addEventListener("click", function (event) {
    età = età.value;
    km = km.value;
    let price = km * 0.21; //? perchè il tofixed applicato qui non funziona?
    event.preventDefault()

        //* if ternario con meccanismo applicazione sconto e stampa prezzo DENTRO a ticket
        (età < 18) ? (price -= price * 0.2, ticket.innerHTML = `il prezzo è ${price.toFixed(2)} €`)  //vedi value 1
        : (età >= 65) ? (price *= .6, ticket.innerHTML = `il prezzo è ${price.toFixed(2)} €`)        //vedi value 3
            : (price, ticket.innerHTML = `il prezzo è ${price.toFixed(2)} €`);
    console.log(ticket);
});

//task MILESTONE 2:
// realizzo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
// Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina
// (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo)



//task MILESTONE 3:
// Ora che la logica è funzionante in pagina, possiamo andare a dedicarci allo stile, raffinando la parte di HTML e CSS in modo da renderla esteticamente gradevole.







