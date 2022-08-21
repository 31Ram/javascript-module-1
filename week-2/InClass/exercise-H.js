function exponential(number) {
  return number * number;
}

function isEven(number) {
  return number % 2 === 0;
}

for (let control=5; control<=20; control++ ){
  console.log(`el valor exponencial de ${control} es ${exponential(control)}`);
}