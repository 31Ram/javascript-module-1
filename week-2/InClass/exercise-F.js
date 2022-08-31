function verificacion(nombreDeUsuario, tipoDeUsuario){
    if ((nombreDeUsuario.charAt(0) === nombreDeUsuario.charAt(0).toUpperCase())&&(nombreDeUsuario.length>=5 && nombreDeUsuario.length<10)){ 
        return (`${nombreDeUsuario} Nombre de Usuario valido`);
      } else {
        return (`${nombreDeUsuario} Nombre de Usuario invalido`)
    }

}

console.log(verificacion("Turing12"));
console.log(verificacion("Luis"));
console.log(verificacion("Oswaldo"));
console.log(verificacion("turing12"));