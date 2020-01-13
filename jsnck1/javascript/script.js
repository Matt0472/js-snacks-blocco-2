// Snack1
// Inserisci un numero, se è pari stampa il numero, se è dispari
// stampa il numero successivo

var numbers = parseInt(prompt('Inserisci un numero'));
var evenNumber = isEven(numbers);

function isEven(num) {
  if (numbers % 2 == 0) {
    return numbers;
  } else {
    return numbers + 1;
  }
}
console.log(evenNumber);
