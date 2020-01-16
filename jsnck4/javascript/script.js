// Snack4 blocco2
// Crea due array che hanno un numero di elementi diversi.
// Aggiungi elementi casuali all’array che ha meno elementi,
// fino a quando ne avrà tanti quanti l’altro.

var array1 = ['quiquoqua', 'junior', 'supermario', 'superluigi', 'crillin', 'goku', 'vegeta'];
var array2 = ['pippo', 'pluto', 'paperino', 'minnie'];
var casualItem = ['majinbu', 'bulma', 'gohan', 'cell', 'broly', 'songoku', 'freezer'];



while(array1.length > array2.length) {
  array2.push(casualItem[Math.floor(Math.random()*casualItem.length)])
}

console.log(array1);
console.log(array2);
