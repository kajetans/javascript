// funkcja bez parametrów

var zmiennaAdam = "Adam"; // zmienna globalna widoczna wszędzie

function zmienna lokalna() {
  var zmiennaAdam = "Zmienna lokalna Adam"; // zmienna lokalna widoczna tylko w funkcji
  var zmienna2 = "zmienna lokalna 2 widoczna tylko w funcji";
}

zmiennaLokalna();
console.log(zmiennaAdam);
