
let students = ["Omar", "Austine", "Dany", "Swathi", "Lesley", "Rukmini"];
let group = ["Austine", "Dany", "Swathi", "Daniel"]; 

function checkGroup(persona){
  for(let index=0; index<students.length; index++){
    if(persona===students[index]){
      return(true);
    }
  }
  return(false);
}

let groupIsOnlyStudents = group.every(checkGroup);

if (groupIsOnlyStudents) {
  console.log("The group contains only students :)");
} else {
  console.log("The group does not contain only students :(");
}

/* EXPECTED RESULT */

// The group does not contain only students
