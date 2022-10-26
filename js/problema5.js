class Celular {
	constructor(color,peso,tamaño,rdc,ram) {
		this.color = color;
		this.peso = peso;
		this.tamaño = tamaño;
		this.resolucionDeCamara = rdc;
		this.memoriaRam = ram;
		this.encendido = false;
	}
	presionarBotonEncendido(){
		if (this.encendido == false) {
			alert("Celular prendiendo");
			this.encendido = true;
		} else{
			alert("El celular apagandose");
			this.encendido = false;
		}
	}
	reiniciar(){
		if (this.encendido == true) {
			alert("reiniciando celular");
		}else{
			alert("El celular esta apagado");
		}
	}
	tomarFoto(){
		alert(`Foto tomada en una resolucion de camara: ${this.resolucionDeCamara}`);
	}
	grabarVideo(){
		alert(`Grabando video en una resolucion de camara: ${this.resolucionDeCamara}`);

	}
	mobileInfo(){
		return `
		Color = <b>${this.color}</b><br>
		Peso = <b>${this.peso}</b><br>
		Tamaño = <b>${this.tamaño}</b><br>
		Resolucion de video = <b>${this.resolucionDeCamara}</b><br>
		memoria Ram = <b>${this.memoriaRam}</b><br>
       	`;
	}

}

class CelularAltaGama extends Celular {
	constructor(color,peso,tamaño,rdc,ram,rdce){
		super(color,peso,tamaño,rdc,ram);
	    this.resolucionDeCamaraExtra = rdce;
	}
	grabarVideoLento(){
		alert("Estas grabando en camara lenta");
	}
	reconocimientoFacial(){
		alert("Vamos a iniciar un reconocimiento facial");
	}
	infoAltaGama(){
		return this.mobileInfo() + `Resolucion de camara extra: ${this.resolucionDeCamaraExtra}`;
	}

}

//celular1 = new Celular("rojo","150g","5'","HD","4GB");
//celular2 = new Celular("azul","100g","4'"," FULL HD","3GB");
//celular3 = new Celular("negro","90g","3'","FULL HD","2GB");

celular1 = new CelularAltaGama("rojo","150g","5'","HD","6GB","FULL HD");
celular2 = new CelularAltaGama("negro","170g","7'","HD","8GB","FULL 4k");

//celular1.presionarBotonEncendido();
//celular1.tomarFoto();
//celular1.grabarVideo();
//celular1.reiniciar();
//celular1.presionarBotonEncendido();


document.write(
//	`${celular1.mobileInfo()}<br>
//	 ${celular2.mobileInfo()}<br>
//	 ${celular3.mobileInfo()}<br>
     `${celular1.infoAltaGama()} <br><br>
      ${celular2.infoAltaGama()} <br>
	`);



