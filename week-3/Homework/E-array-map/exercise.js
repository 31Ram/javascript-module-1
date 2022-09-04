// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

let numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

function multiplicacion(operando){
  return(operando*100);
}
// Forma 1: creando la funcion convencionalmente  y pasandola como parametro a la funcion map
let productoArray = numbers.map(multiplicacion);
console.log(`Forma 1: ${productoArray}`);

/* Forma 2: Creando la funcion como argumento de la funcion amp */
let producto = numbers.map(function (number) {
  return number * 100;
});
console.log(`Forma 2: ${productoArray}`);

/* Forma 3: creando una funcion anonima como argumento de la funcion map,
   implementada en la misma linea de codigo */
let ProductoDeNumeros = numbers.map((operando)=>operando*100);
console.log(`Forma 3: ${ProductoDeNumeros}`);