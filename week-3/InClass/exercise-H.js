let arrayNames = ["Daniel","jacobo", "luis","wiston","graciela","andrea","karelis","xiomara","gabriel"];

function searchName(name){
  if(name==="wiston")
    console.log("Found me!");
  else 
    console.log("Haven't found me :(");
}

arrayNames.forEach(searchName);