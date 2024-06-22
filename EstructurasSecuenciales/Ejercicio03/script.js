/* Un estudiante desea saber cual será su calificación final en la materia de Algoritmos. Dicha calificación se compone de los siguientes porcentajes:

55% del promedio de sus tres calificaciones parciales
30% de la calificación del examen final
15% de la calificación de un trabajo final */

let nota1,nota2,nota3,notaexamen,notatrabajofinal;
let resultado;
nota1=Number(prompt('digite la nota1 '));
nota2=Number(prompt('digite la nota2 '));
nota3=Number(prompt('digite la nota3 '));
notaexamen=Number(prompt('digite la nota examen final'));
notatrabajofinal=Number(prompt('digite la nota trabajo final'));

resultado=(((nota1+nota2+nota3)/3)*0.55)+(notaexamen*0.3)+(notatrabajofinal*0.15);

alert('la nota final es:' + resultado);