function numberChecker(num) {
  if (num > 20) {
    return `${num} es mayor que 20`;
  } else if (num === 20) {
    return `${num} es igual a 20`;
  } else if (num < 20) {
    return `${num} es menor a 20`;
  } else {
    return `${num} No es un numero :(`;
  }
}

console.log(numberChecker(25));
console.log(numberChecker(20));
console.log(numberChecker(14));
console.log(numberChecker("w"));