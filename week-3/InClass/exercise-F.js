let birthYears = [ 1964, 2008, 1999, 2005, 1978, 1985, 1919 ];

const añoActual = ()=>{
  let date = new Date();
  return(date.getFullYear());
}

const edadPersona=(añoDeNacimiento)=>{
  return(añoActual()-añoDeNacimiento);
}

permisoDeConducir=(year)=>{
  let años = edadPersona(year);
    if(años>=18){
      return(`Nacio en ${year} puede conducir`);
    } else{
        return(`Nacio en ${year} puede conducir en ${18-años} años`);
    }
}

console.log(birthYears.forEach((year)=>console.log(permisoDeConducir(year))));

