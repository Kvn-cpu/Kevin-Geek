let n1 , n2, n3 ;
let mayor=0;
n1= Number (prompt("ingrese el numero 1"));
n2= Number (prompt("ingrese el numero 2"));
n3= Number (prompt("ingrese el numero 3"));
 
if((n1>n2)&&(n1>n3)){
    mayor=n1;
}else if ((n1<n2)&&(n2>n3) ){
    mayor=n2;
} 
  else  { 
    mayor=n3;
  }

  alert("el numero mayor es: " + mayor);
