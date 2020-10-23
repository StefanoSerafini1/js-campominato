//Il computer deve generare 16 numeri casuali (bombe) tra 1 e 100.
//In seguito deve chiedere all'utente (100 - 16) volte di inserire un numero alla volta,
//sempre compreso tra 1 e 100.
//L'utente non può inserire più volte lo stesso numero.
//La partita termina quando il giocatore inserisce un numero "vietato"
// o raggiunge il numero massimo possibile di numeri consentiti.
//Al termine della partita il software deve comunicare il punteggio

var maxnumeri = 100;
var bombe = 16;


var arraybombe = funzionebombe(maxnumeri, bombe );

// Var per n° max tentativi inseriti da Utente (differenza Range max numeri - Numero bombe)
var maxtentativi = maxnumeri - bombe;

console.log(arraybombe);
console.log(maxtentativi);

var tentativi = 0;      // n° tentativi e quindi punteggio
var bombabeccata = false;
var tentativiutente=[];
//ciclo while che si interrompe se becchi una bomba oppuure
//se il numero dei tentativi raggiunge il massimo dei tentativi e quindi vinci
while ( ( bombabeccata === false ) && (tentativi < maxtentativi) ) {
  var numutente = parseInt(prompt('Inserisci un numero da 1 a ' + maxnumeri));
  //controllo con if se valore inserito è già stato inserito in precedenza
  if(!tentativiutente.includes(numutente)){
     tentativiutente.push(numutente);
     tentativi++;
  }else{
    var numutente = parseInt(prompt('Hai già inserito questo numero inserisci un altro numero da 1 a ' + maxnumeri));
  }

  // Se utente becca bomba, loop si ferma
  if ( seinarray(numutente, arraybombe) === true ) {
    bombabeccata = true;
    console.log('hai beccato una bomba dopo ' + tentativi + ' tentativo/i');
    
  }
}


if(tentativi == maxtentativi){
  console.log('HAI VINTO')
}


//funzione per crezione array bombe
function funzionebombe(maxnumeri, bombe) {
  var randombombe = [];
  while (randombombe.length < bombe) {
    var numerorandom = Math.floor(Math.random() * ( maxnumeri - 1 )) + 1;
//richiamo della funzione per controllare se elemento è presente nel array
    if (seinarray(numerorandom, randombombe) === false) {
      randombombe.push(numerorandom);
    }
  }
  return randombombe;
}


//controllo se l'elemento è presente nel array se presente inarray diventa true
function seinarray(elemento, listaarray) {
  var inarray = false;
  for (var i = 0; i < listaarray.length; i++) {

    if (elemento === listaarray[i]) {
      inarray = true;

    }
  }
  return inarray;
}
