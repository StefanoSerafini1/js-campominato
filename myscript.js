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
