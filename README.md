# Biglietto del treno form

MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.

MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo, come da screenshot allegato. Il recap dei dati e l’output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo).

Questo semplice programma presenta all'utente un sito dove egli potrà acquistare un biglietto ferroviario. All'apertura della pagina, all'utente verrà presentato un form dove dovrà inserire alcuni input. Alla fine del processo, cliccando un bottone, verrà generato un biglietto. 

Chiedere gli input all'utente:

1- In un campo input, l'utente dovrà inserire il proprio nome e cognome.
<label for="name"></label>
<input type="text" id="name" required>

2- In un campo input, l'utente dovrà inserire i km che desidera percorrere. 
<label for="distance"></label>
<input type="number" id="distance" required>

3- In un campo select, l'utente dovrà selezionare se è minorenne, maggiorenne, o over 65.
<label for="age"></label>
<select id="age">
  <option value="minorenne">Minorenne</option>
  <option value="maggiorenne">Maggiorenne</option>
  <option value="over65">Over 65</option>
</select>

4- Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
 - il prezzo del biglietto è definito in base ai km (0.21 € al km)
 - va applicato uno sconto del 20% per i minorenni
 - va applicato uno sconto del 40% per gli over 65.

const priceKm = 0.21;
const totalTicketPrice = km * priceKm;
//apply discount if needed
let discount = 0;
if (age < 18) {
    discount = totalTicketPrice * 0.20;
} else if (age >= 65) {
    discount = totalTicketPrice * 0.40;
};
//calculate final price with discount
const finalTicketPrice = totalTicketPrice - discount;
//print final price in console
console.log(`Il prezzo finale del biglietto è: €${finalTicketPrice.toFixed(2)}`);

5- Il form è sempre presente. Alla fine del form ci saranno due bottoni. Uno per calcorare il prezzo del biglietto e far apparire il div dove c'è il biglietto, l'altro per annullare e resettare gli input e far sparire il biglietto qualora fosse presente.

<button type="button" id="generate-button">Genera</button>
<button type="button" id="cancel-button">Annulla</button>

