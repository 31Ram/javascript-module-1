
let estudiantes = ["jacobo","luis","wiston","graciela","andrea","karelis","xiomara","gabriel"];

console.log(estudiantes, estudiantes.length);

estudiantes[estudiantes.length] = estudiantes[0]
estudiantes[0] = "oswaldo";
estudiantes[estudiantes.length] = "lina";

console.log(estudiantes, estudiantes.length);

