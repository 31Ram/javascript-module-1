function magician(yourFunc) {
  console.log("I am magician! Watch as I mutate an array of strings to your heart's content!");
  const namesArray = [
    "James",
    "Elamin",
    "Ismael",
    "Sanyia",
    "Chris",
    "Antigoni",
  ];
  const magicOutput = yourFunc(namesArray);
  return magicOutput;
}


// Forma 1: creando la funcion convencionalmente  y pasandola como parametro a la otra funcion
function yourFunc(namesArray){ 
  return (namesArray.map(function uppCase(name){ return(name.toUpperCase())}));
}
console.log(magician(yourFunc))

/* Forma 2: creando la funcion convencionamelte utilizando una funcion clecha
   y pasandola como parametro a la otra funcion */
 function yourFunc(namesArray){ 
   return (namesArray.map((name)=>name.toUpperCase()));
 }
console.log(magician(yourFunc))

/* Forma 3: creando una funcion anonima como argumento de otra funcion*/
console.log(magician((namesArray)=>namesArray.map((elemt)=>elemt.toUpperCase())));
