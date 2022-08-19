/* Funcion que recibe los parametros de Alumnos, maestros, materia y fecha de la clase y me retorna 
   una cadena informando la lista general de partisipantes con los datos de la materia y dia en
   que se realizo la clase  */

function asistenciaDeClase(alumnos, maestros, materia, fecha){
  return (`En la clase de ${materia} asistieron ${alumnos} alumnos, ${maestros} maestros el dia ${fecha}`)
}

let alumnos = 15;
let maestros = 8;
let materia = "Programacion";
let fecha = "16/08/2022";

console.log(asistenciaDeClase(alumnos, maestros, materia, fecha));