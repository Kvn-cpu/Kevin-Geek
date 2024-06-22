//Un maestro desea saber que porcentaje de hombres y el porcentaje de mujeres que hay en un grupo de estudiantes.

let H,J;
let grupo =0;
let porcentajeMasculino=0;
let porcentajeFemenino=0;
 
H= Number(prompt("ingresa el numero de estudiantes masculinos"));
J= Number(prompt("ingresa el numero de estudiantes femeninos"));

grupo= H + J;
 porcentajeMasculino=(H/grupo)*100
 porcentajeFemenino=(J/grupo)*100

 alert(`el porcentaje de mujeres del grupo es %${porcentajeFemenino} y el porcentaje de hombres es %${porcentajeMasculino}`);
      
   
      
   