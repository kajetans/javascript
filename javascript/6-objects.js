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

// var osoba = {
//   imie: "",
//   nazwisko: "Nowacki",
//   wzrost: 182,
//
//     wyswietlSzczgoly: function( paramImie ) {
//       this.imie = paramImie;
//         console.log( "osoba to: " + this.imie + " " + this.nazwisko + " " + this.wzrost );
//     }
// }
//
// console.log(osoba.imie);
// console.log(osoba["nazwisko"]);
//
// osoba.wyswietlSzczgoly("Boguslaw");
//
//
// //dodanie wlasciwosci
// osoba.wiek = 36;
// osoba.wyswietlWiek = function() {
//   console.log(this.wiek);
// }
//
// osoba.wyswietlWiek();


class Ogloszenie {
    constructor (tytul, opis, kontakt, cena) {
        this.tytul = tytul;
        this.opis = opis;
        this.kontakt = kontakt;
        this.cena = cena;
    }

    wyswietlOgloszenie() {                          //metoda - ma nawiasy po nazwie
        console.log( "Ogłoszenie! Tytuł: " + this.tytul + "opis; " + this.opis + "kontakt: " + this.kontakt + "cena" + this.cena);
      }
}

var ogloszenie1 = new Ogloszenie( "Sprzedam Opla", "Świeżynka prosto od 80-letniego Niemca", "605-557-421", 16900);
ogloszenie1.wyswietlOgloszenie();
