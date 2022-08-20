function añoActual(){
  let date = new Date();
  return (date.getFullYear());
}

function añoDeNacimiento(age) {
  return (añoActual()-age);
}

function informacionDeLaPersona(name, age) {
  let añoNacimiento = añoDeNacimiento(age);
  const message =
    "Mi nombre es: " + name + " y naci el año: " + añoNacimiento;
  return message;
}

let nombrePersona = "Wiston";
let años = 32;
console.log(informacionDeLaPersona(nombrePersona, años));