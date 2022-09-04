/* 
  You are given an array of names.
  Using .find(), we'd like to find the first name which starts with A and is longer than 7 letters.
*/

findLongNameThatStartsWithA =(arrayNames) => {
  if((arrayNames.length>7)&&(arrayNames.charAt(0)==='A')){
    return(arrayNames);
  } 
}

let names = ["Rakesh", "Antonio", "Alexandra", "Andronicus", "Annam", "Mikey", "Anastasia", "Karim", "Ahmed"];
let longNameThatStartsWithA = names.find(findLongNameThatStartsWithA);
console.log(longNameThatStartsWithA);

/* EXPECTED OUTPUT */
// "Alexandra"
