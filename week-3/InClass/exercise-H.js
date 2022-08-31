let arrayNames = ["Daniel","jacobo", "luis","wiston","graciela","andrea","karelis","xiomara","gabriel"];

function searchName(name){
  if(name==="wiston"){
    return("Found me!");
  } else{
      return("Haven't found me :(");
    }
}


//console.log(arrayNames.find((name)=>searchName(name)));
console.log(arrayNames.find(searchName));