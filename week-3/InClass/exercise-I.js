let arrayCadena = [ 100, "iSMael", 55, 45, "sANyiA", 66, "JaMEs", "eLAmIn", 23, "IsMael", 67, 19, "ElaMIN",];

verificacion=(elementoArray)=>{
    if(typeof(elementoArray)==="string"){ 
      return(elementoArray);
    }
}

let arrayClasificado = arrayCadena.filter(verificacion).map((elemt)=>elemt.toUpperCase())
console.log(arrayClasificado);
