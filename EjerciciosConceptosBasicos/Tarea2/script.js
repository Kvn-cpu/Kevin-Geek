// Hacer un algoritmo que calcule el sueldo de un empleado dados como datos de entrada: el nombre, horas trabajadas y el valor de la hora.

let nombre, htrabajadas, valorhora, total;

nombre= prompt('Digite el nombre de la persona');
htrabajadas= Number(prompt('Digite el numero de horas trabajadas'));
valorhora= Number(prompt('digite el valor de la hora de trabajo son comas ni puntos'));

total=valorhora*htrabajadas;

alert(`El sueldo de ${nombre} es de : ${total}`);