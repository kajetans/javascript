var liczba1 = 14; //mnozenie
var liczba2 = 6;

console.log(liczba1 / liczba2);

var liczba1 = 14; // dzielenie
var liczba2 = 6;

console.log(liczba1 + liczba2);

var liczba1 = 14; //dodawanie
var liczba2 = 6;

console.log(liczba1 - liczba2);

var liczba1 = 14; //odejmowanie
var liczba2 = 6;

console.log(liczba1 % liczba2);

var liczba1 = 14; //modulo - "%" reszta z dzielenia
var liczba2 = 6;
var prawda = true;
var liczba1 = "smog";
var liczba2 = "smog";

// liczba1++; //liczba1 = liczba2+1
// console.log(liczba1);
// liczba2--; // liczba2 = liczba2 - 1
// console.log(liczba2);
//
// console.log(liczba1++);
// console.log(++liczba1);
//
// liczba1 +=2; // liczba1 + 2;
//
// liczba1 /= 10
// liczba1 %= 6; // liczba1 = liczba1 % 6;
// console.log(liczba1);
//
// var wynik = (liczba1 === liczba2) ? "prawda" : "fałsz" ;
// console.log(wynik);
//

var pietro = 14;
if (liczba1 > liczba2 && pietro == 14) { // && "i jednocześnie" czyli oba warunki muszą być spełnione
  console.log("Spełnione zostały 2 warunki czyli TRUE")
}

if (liczba1 == liczba2) {
  console.log("liczby są równe")
} else if (liczba1 < liczba2) {
  console.log("liczba 1 mniejsza od liczby 2");
} else if (liczba1 == "smog") {
  console.log("liczba 1 równa się smog");
} else {
  console.log("kod który wykona się gdy żaden z warunków nie zostanie spełniony");
}


var grupa = 25;

switch (grupa) {
  case 10:
    console.log("liczba osób w grupie = 10");
    break;
  case 14:
    console.log("liczba osób w grupie = 10");
    break;
  case 18:
    console.log("liczba osób w grupie = 18");
    break;
  case 20:
    console.log("liczba osób w grupie = 20");
    break;
  default:
    console.log("liczba osób w grupie = 20");
}
