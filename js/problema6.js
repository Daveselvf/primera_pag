class App {
	constructor(descargas,puntuacion,peso){
		this.descargas = descargas;
		this.puntuacion = puntuacion;
		this.peso = peso;
		this.iniciada = false;
		this.instalada = false;
	}
	instalar(){
		if (this.instalada == false) {
			this.instalada = true;
			alert("App instalada conrrectamente");
		}
	}
	desinstalar(){
		if (this.instalada == true) {
			this.instalada = false;
			alert("App desinstalada correctamente");
		}
	}
	abrir(){
		if (this.iniciada == false && this.instalada == true) {
			this.iniciada = true;
			alert("App iniciada correctamente");
		}

	}
	cerrar(){
		if (this.iniciada == true && this.instalada == true) {
			this.iniciada = false;
			alert("App cerrada correctamente");
		}
	}
	appInfo(){
		return `
		descargas: <b>${this.descargas}</b><br>
		puntuacion: <b>${this.puntuacion}</b><br>
		peso: <b>${this.peso}</b><br>
		`;
	}
}

app = new App("16.600","5 Estrellas","900mb");
app1 = new App("10.600","4 Estrellas","2GB");
app2 = new App("9.600","5 Estrellas","3GB");

//app.instalar();
//app.abrir();
//app.cerrar();
//app.desinstalar();

document.write(
    `${app.appInfo()}<br>
     ${app1.appInfo()}<br>
     ${app2.appInfo()}<br>
    `

	)

