function añoDeNacimiento(age) {
  return 2022 - age;
}

function informacionDeLaPersona(name, age) {
  let añoNacimiento = añoDeNacimiento(age);
  const message =
    "Mi nombre es: " + name + " y naci el año: " + añoNacimiento;
  return message;
}

let nombrePersona = "Wiston";
let años = 32;
console.log(informacionDeLaPersona(nombrePersona,años));