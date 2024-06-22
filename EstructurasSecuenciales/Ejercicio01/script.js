// Una modista, para realizar sus prendas de vestir, encarga las telas al extranjero. Para cada pedido tiene que proporcionar las medidas de la tela en pulgadas, pero ella generalmente las tiene en metros. Realice un algoritmo para ayudar a resolver el problema, determinando cuántas pulgadas debe pedir con base en los metros que requiere. (1 pulgada = 0.0254 m).

let metro,convertidorpulgadas,pulgada;
pulgada=(1/0.0254);

metro = Number(prompt('Digite el numero de metros a convertir en pulgadas'))

convertidorpulgadas= metro*pulgada;

alert(`los ${metro} de metros de tela a pulgadas es : ${convertidorpulgadas}`);