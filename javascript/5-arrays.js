var  imiona = ["Paweł", "Krzysztof", "Kasia", "Nikola", "Kamil"];

//console.log( imiona[2] ); //Kasia - bo zaczyna liczyć od ZERA!
console.log(imiona);

imiona[5] = "Monika";
imiona[6] = "Marcin";

console.log(imiona);

// push dodaje element na końcu tablicy i z automatu przypisze kolejny indeks

imiona.push("Mikołaj", "Adam");

//usuwa ostatni element tablicy
var usunietyElement = imiona.pop();

//wstawianie elementu na początku tablicy
imiona.unshift("Kasia", "Michał");

//usuwa element z początku tablicy
imiona.shift();

//sprawdzenie ileości elementów tablicy
console.log(imiona.length);

console.log(imiona);

//rozbijanie tablicy na ciąg tekstowy

var tablicaJakoTekst = imiona.join(", ");
console.log(tablicaJakoTekst);

//odwracanie tablicy
var imionaReverse = imiona.reverse();
console.log(imionaReverse);

//sortowanie tablicy
var posortowana = imiona.sort();
console.log(posortowana);
