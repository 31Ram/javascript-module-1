let birthYears = [1964, 2008, 1999, 2005, 1978, 1985, 1919];

const añoActual = ()=>{
  let date = new Date();
  return(date.getFullYear());
}

edadPersona=(añoDeNacimiento)=>{
  return(añoActual() - añoDeNacimiento);
}

let edades = birthYears.map((year)=>edadPersona(year));
console.log(edades);
