let free = false;

const validarCliente = (time)=> {
	let edad = prompt("Cual es tu edad?");
	if (edad > 18) {
		if (time >= 2 && time < 7 && !free) {
			alert("Puedes pasar gratis, ya que eres la primera persona en entrar despues de las 2 AM");
			free == true;
		} else {
			alert(`son las ${time}:00Hs, puedes pasar pero tienes que pagar la entrada`);
		}
	} else {
		alert("Disculpa eres menor de edad por lo tanto no puedes pasar");
	}
}
validarCliente(23);
validarCliente(24);
validarCliente(0.2);
validarCliente(0.6);
validarCliente(1);
validarCliente(2);
validarCliente(2.4);
validarCliente(3);