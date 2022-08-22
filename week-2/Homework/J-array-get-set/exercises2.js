/*
  Array setters
  -------------
  WITHOUT changing the array literal declaration,
  - assign the number 4 to the end of this array
  - change the first value in the array to the number 1
*/

let numbers = [1, 2, 3]; 
numbers[0] = 1;
numbers[numbers.length] = 4;


console.log(numbers); 

/* 
  EXPECTED RESULT
  ---------------
  [1, 2, 3, 4]
*/
