
//task seleziono e inizializzo gli input

//*-----elementi nel FORM
//nome passeggero
const identityField = document.getElementById('identity-field')
// Età del passeggero
let età = document.getElementById("age");
// numero di chilometri da percorrere
let km = document.getElementById("km");
// bottone => output su cui applicare eventlistener!
const go = document.getElementById("go");

//*-----elementi nel biglietto in stampa!
const biglietto = document.getElementById("biglietto")
//nome passeggero
const identity = document.getElementById('identity');
//tariffa applicata
const discount = document.getElementById('discount');
// numero random corsa
const idcorsa = document.getElementById('idcorsa')
// output prezzo biglietto
const ticket = document.getElementById("ticket");

// task MILESTONE 1:
// Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati),
//  realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.

//task organizzo l'output con l'eventlistener contenente
//*----- I STEP => RACCOLTA DATI selezionati sopra con l'input!
//*----- II STEP => (stampa) risultato nel biglietto d-none e cambia class in d-flex
//*----- III STEP => IF + INNERHTML
go.addEventListener("click", function (event) {

    biglietto.classList.replace('d-none', 'd-flex');


    event.preventDefault()

    identity.innerHTML = identityField.value;
    idcorsa.innerHTML += Math.floor(Math.random() * 9000) + 1;

    età = età.value;
    km = km.value;
    let price = km * 0.21; //? perchè il tofixed applicato qui non funziona?

    //* if ternario con meccanismo applicazione sconto e stampa prezzo DENTRO a ticket
    (età == "minorenne") ? (price -= price * 0.2, discount.innerHTML = `Tariffa ${età}`, ticket.innerHTML += ` ${price.toFixed(2)} €`)
        : (età == "over") ? (price *= .6, discount.innerHTML = `Tariffa ${età}`, ticket.innerHTML += `${price.toFixed(2)} €`)
            : (discount.innerHTML = `Tariffa ${età}`, ticket.innerHTML += `${price.toFixed(2)} €`);
    console.log(ticket);

});

//-----BONUS-----
function riavvolgi() {
    location.reload();
}

//task MILESTONE 2:
// realizzo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
// Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina
// (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo)
//*-----DONE-----

//task MILESTONE 3:
// Ora che la logica è funzionante in pagina, possiamo andare a dedicarci allo stile,
// raffinando la parte di HTML e CSS in modo da renderla esteticamente gradevole.
//*-----DONE-----





