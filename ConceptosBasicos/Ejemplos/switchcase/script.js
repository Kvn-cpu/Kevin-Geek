let dia;
dia= Number (prompt("digite un mero deacuardo a los dias de la semana empezando desde el dia domingo=1 hasta el sabado=7 "));
switch (dia) {
    case 1:
        console.log("es domingo");
        break;
    case 2:
        console.log("es lunes");
    break;
    
    case 3:
    
        console.log("es martes");
        break;
    case 4:
 
        console.log("es miercoles");
        break;
     case 5:
 
        console.log("es jueves");
        break;
    case 6:
 
        console.log("es viernes");
        break;
     case 7:
 
        console.log("es sabado");
        break;
    default:
        console.log("el dia ingresado no es valido");
        break;
}