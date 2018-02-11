// var imie = "Czesław";
//
// var osoba = {
//   imie: "Adam",
//   nazwisko: "Nowacki",
//   wzrost: 182,
//
//     wyswietlSzczgoly: function() {
//         console.log( "osoba to: " + this.imie + " " + this.nazwisko + " " + this.wzrost );
//     }
// }
//
// console.log(osoba.imie);
// console.log(osoba["nazwisko"]);
//
// osoba.wyswietlSzczgoly();

var osoba = {
  imie: "",
  nazwisko: "Nowacki",
  wzrost: 182,

    wyswietlSzczgoly: function( paramImie ) {
      this.imie = paramImie;
        console.log( "osoba to: " + this.imie + " " + this.nazwisko + " " + this.wzrost );
    }
}

console.log(osoba.imie);
console.log(osoba["nazwisko"]);

osoba.wyswietlSzczgoly("Boguslaw");
