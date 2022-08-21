function estadoDeAnimo(respuesta) {
    if (respuesta === "feliz") {
        return "¡Buen trabajo, lo estás haciendo muy bien!";
    } else if (respuesta === "triste") {
        return ("Cada nube tiene un lado positivo");
      } else if (typeof respuesta === "number"){
          return ("Beep beep boop");
        } else {
            return("Lo siento, ¡todavía estoy aprendiendo sobre los sentimientos!");
          }
}

console.log(estadoDeAnimo("feliz"));
console.log(estadoDeAnimo("triste"));
console.log(estadoDeAnimo(2));
console.log(estadoDeAnimo("felix"));
