

let cn = 0, cp =0, cneg =0, num;

for (let i = 1; i <=10; i++) {
    
    num = Number(prompt("ingrese el numero"));

    if (num==0) {
        cn = cn + 1;
    }
    else if (num>0) {
        cp=cp+1;
    }else{
        cneg=cneg+1;
    }

} 
alert(`cantidad Numeros neutros: ${cn} 
cantidad numeros positivos${cp} 
cantidad negativos${cneg}`);