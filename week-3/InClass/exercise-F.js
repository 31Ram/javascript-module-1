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
      console.log(`Nacio en ${year} puede conducir`);
    } else{
        console.log(`Nacio en ${year} puede conducir en ${18-años} años`);
    }
}

birthYears.forEach((year)=>permisoDeConducir(year));

