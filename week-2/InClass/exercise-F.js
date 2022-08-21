function verificacion(nombreDeUsuario, tipoDeUsuario){
    if ((nombreDeUsuario.charAt(0) === nombreDeUsuario.charAt(0).toUpperCase())&&(nombreDeUsuario.length>=5 && nombreDeUsuario.length<10))
        return (`Nombre de Usuario valido`)
    else {
        return (`Nombre de Usuario invalido`)
    }
}

console.log(verificacion("Turing12"));
console.log(verificacion("turing12"));