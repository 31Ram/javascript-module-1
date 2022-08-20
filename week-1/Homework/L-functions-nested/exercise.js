let mentor1 = "Daniel";
let mentor2 = "Irina";
let mentor3 = "Mimi";
let mentor4 = "Rob";
let mentor5 = "Yohannes";
 
function uppercase (dato){
  return (dato.toUpperCase());
}

function greeting(firtsName){
  return (`Hola ${firtsName}, encantado de conocerte`);
}

console.log(greeting(uppercase(mentor1)));
console.log(greeting(uppercase(mentor2)));
console.log(greeting(uppercase(mentor3)));
console.log(greeting(uppercase(mentor4)));
console.log(greeting(uppercase(mentor5)));
