// Snack1
// Inserisci un numero, se è pari stampa il numero, se è dispari
// stampa il numero successivo

var userNumbers = parseInt(prompt('Inserisci un numero'));
var evenNumber = isEven(userNumbers);

function isEven(numero) {
  if (userNumbers % 2 == 0) {
    return userNumbers;
  } else {
    return userNumbers + 1;
  }
}
console.log(evenNumber);
