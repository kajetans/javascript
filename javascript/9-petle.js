// var ileRazy = 30;
//
// for( var i = 0; i < ileRazy; i ++ ) {
//   var iteracja = i + 1;
//   console.log("Iteracja pętli nr " + iteracja);
// }

var tablica = ["Audi", "Opel", "Honda", "Mazda", "Nissan"];

for (var i = 0; i < tablica.length; i++ ) {
  console.log( "Tablica! Index = " + i + ", wartość = " + tablica [i] );
}

tablica.forEach( function( elementTablicy, indexTablicy ) {
  console.log("Index: " + indexTablicy + "wartość: " + elementTablicy );

} );

for( var i = 0; i < tablica.length; i++) {
    if( i == 2 ) {
      continue;
    }
    console.log( i, tablica[i]);
}
