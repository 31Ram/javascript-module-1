let yearList = [ 1964, 2008, 1999, 2005, 1978, 1985, 1919 ];

const añoActual = ()=>{
  let date = new Date();
  return(date.getFullYear());
}

const edadPersona=(añoDeNacimiento)=>{
  return(añoActual()-añoDeNacimiento);
}

permisoDeConducir=(year)=>{
  let años = edadPersona(year);
  return (años>=17)
}  

console.log(yearList.filter(permisoDeConducir));

