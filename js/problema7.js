class Calculadora {
	constructor(){

	}

sumar(num1,num2){
	return parseInt(num1) + parseInt(num2);
}

restar(num1,num2){
	return parseInt(num1) - parseInt(num2);
}

dividir(num1,num2){
	return parseInt(num1) / parseInt(num2);
}

multiplicar(num1,num2){
	return parseInt(num1) * parseInt(num2);
}

potenciar(num,exp){
	let numero = num;
	for (var i = 1; i < exp; i++) {
		numero = numero * num;
	}
	return numero;
}
raizCuadrada(num){
	return Math.sqrt(num);
}
raizCubica(num){
	return Math.cbrt(num);
}

}

const calculadora = new Calculadora();

alert("Que operacion desea realizar: ");
let operacion = prompt("1: Suma, 2: Resta, 3: Multiplicacion, 4: Division, 5: Potenciar, 6: Raiz Cuadrada, 7: Raiz Cubica");

if (operacion == 1) {
	let numero1 = prompt("Primer numero para sumar: ");
	let numero2 = prompt("Segundo numero para sumar: ");
	resultado = calculadora.sumar(numero1,numero2);
	alert(`Tu resultado es: ${resultado}`);
}

else if (operacion == 2) {
	let numero1 = prompt("Primer numero para restar: ");
	let numero2 = prompt("Segundo numero para restar: ");
	resultado = calculadora.restar(numero1,numero2);
	alert(`Tu resultado es: ${resultado}`);
}

else if (operacion == 3) {
	let numero1 = prompt("Primer numero para multiplicar: ");
	let numero2 = prompt("Segundo numero para multiplicar: ");
	resultado = calculadora.multiplicar(numero1,numero2);
	alert(`Tu resultado es: ${resultado}`);
}

else if (operacion == 4) {
	let numero1 = prompt("Primer numero para dividir: ");
	let numero2 = prompt("Segundo numero para dividir: ");
	resultado = calculadora.dividir(numero1,numero2);
	alert(`Tu resultado es: ${resultado}`);
}
else if (operacion == 5) {
	let numero1 = prompt("Primer numero para potenciar: ");
	let numero2 = prompt("Segundo numero para exponente: ");
	resultado = calculadora.potenciar(numero1,numero2);
	alert(`Tu resultado es: ${resultado}`);

} 

else if (operacion == 6) {
	let numero1 = prompt("numero para calcular Raiz Cuadrada: ");
	resultado = calculadora.raizCuadrada(numero1);
	alert(`Tu resultado es: ${resultado}`);

} 

else if (operacion == 7) {
	let numero1 = prompt("numero para calcular Raiz Cubica: ");
	resultado = calculadora.raizCubica(numero1);
	alert(`Tu resultado es: ${resultado}`);

} else {
	alert("No se ha encontrado la operacion");
}