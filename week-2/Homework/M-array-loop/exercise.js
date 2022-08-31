/*
	Write a function that receives an array of string, and console.log all strings that start with letter 'T'
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
*/

const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

function arrayString(arr){
  for(let control = 0; control<arr.length; control++){
    if(arr[control].charAt(0)==="T"){
       console.log(arr[control]);
    }
  }
}

function arrayStartsWith(arr){
  for(let control=0; control<arr.length; control++){
    if(arr[control].startsWith('T')){
      console.log(arr[control]); 
    }
  }
}

arrayString(daysOfWeek); // funcion 1
console.log();
arrayStartsWith(daysOfWeek); // funcion 2