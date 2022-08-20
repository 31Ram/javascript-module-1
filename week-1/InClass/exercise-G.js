let numberOfStuden = 15;
let numberOfMentors = 8;
let totalStudenAndMentors = numberOfStuden + numberOfMentors;

console.log(`Numero total de estudiantes: ${numberOfStuden}`);
console.log(`Numero total de maestros: ${numberOfMentors}`);
console.log(`Numero total de estudiantes y maestros: ${totalStudenAndMentors}`);
 
console.log("Porcentage de estudiantes: " + Math.round((100*numberOfStuden)/totalStudenAndMentors)+"%");
console.log("Porcentaje de maestros: " + Math.round((100*numberOfMentors)/totalStudenAndMentors)+"%");
