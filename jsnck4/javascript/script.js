// Snack4 blocco2
// Crea due array che hanno un numero di elementi diversi.
// Aggiungi elementi casuali all’array che ha meno elementi,
// fino a quando ne avrà tanti quanti l’altro.

var array1 = ['quiquoqua', 'junior', 'drago shenron', 're kaio', 'crillin', 'goku', 'vegeta', 'c-18', 'c-16', 'c-17'];
var array2 = ['gogeta', 'vegetto', 'trunks', 'goten'];
var casualItem = ['majinbu', 'bulma', 'gohan', 'cell', 'broly', 'songoku', 'freezer'];


while(array1.length > array2.length) {
  array2.push(casualItem[Math.floor(Math.random()*casualItem.length)])
}

console.log(array1);
console.log(array2);
