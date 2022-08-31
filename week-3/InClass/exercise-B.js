let estudiantesClaseEspanol = ["jacobo","luis","wiston","graciela","andrea","karelis","xiomara","gabriel"];
let estudiantesClaseEnglish = ["abdul","ali","anna","isar","manuel","matias","nuno","simon","susana"];
let estudiantesMigracode = estudiantesClaseEspanol.concat(estudiantesClaseEnglish);

function buscarAlumno(nombreDelEstudiante, estudiantesMigracodeEsp){
  if(estudiantesMigracodeEsp.includes(nombreDelEstudiante)){
    console.log(`${nombreDelEstudiante} esta en la clase con ${estudiantesMigracodeEsp}`)
  } else {
    console.log(`${nombreDelEstudiante} NO esta en la clase con ${estudiantesMigracodeEsp}`)

  }
}

//console.log(estudiantesMigracode.sort());

buscarAlumno("wiston", estudiantesMigracode);
buscarAlumno("damarlin", estudiantesMigracode);