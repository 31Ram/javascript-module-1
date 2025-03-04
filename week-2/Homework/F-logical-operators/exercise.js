/*
  Logical Operators
  ---------------------------------
  Using logical operators complete the unfinished statements.
  The variables should have values that match the expected results.
*/


let htmlLevel = 8;
let cssLevel = 4;

let htmlLevelAbove5 = htmlLevel > 5;
let cssLevelAbove5 = cssLevel > 5;

let cssAndHtmlAbove5 = ((htmlLevel>5)&&(cssLevel>5));
let cssOrHtmlAbove5 = ((htmlLevel>5)||(cssLevel>5));


console.log("Is Html knowledge above 5?", htmlLevelAbove5);
console.log("Is CSS knowledge above 5?", cssLevelAbove5);
console.log("Is Html And CSS knowledge above 5?", cssAndHtmlAbove5);
console.log(
  "Is either Html or CSS knowledge above 5?",
  cssOrHtmlAbove5
);

/* 
  EXPECTED RESULT
  ---------------
  Is Html knowledge above 5? true
  Is CSS knowledge above 5? false
  Is Html And CSS knowledge above 5? false
  Is either Html or CSS knowledge above 5? true
*/
