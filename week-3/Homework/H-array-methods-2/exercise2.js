/*
  Array methods - .join()
  -------------------------
  Complete the capitalise function 
  It should return a string with the first letter in uppercase
  For example, capitailise("hello") should return "Hello"
  Tip: use the string method .split() and the array method .join()
*/

function capitalise(str) {
  let arrayStr = str.split("");
  
  if((arrayStr.length>0)&&(arrayStr[0])===(arrayStr[0].toLowerCase())){
    arrayStr[0]=arrayStr[0].toUpperCase();
    return(arrayStr.join(""));
  }
}

let name = "daniel";

console.log(capitalise(name));
console.log(capitalise("hello"));

/* 
  EXPECTED RESULT
  ---------------
  Daniel
  Hello
*/
