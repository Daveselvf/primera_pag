let materias = {
	fisica: [90,6,3,"fisica"],
	matematica: [84,8,2,"matematica"],
	logica: [92,8,4,"logica"],
	quimica: [96,8,4,"quimica"],
	calculo: [91,6,3,"calculo"],
	programacion: [79,7,4,"programacion"],
	biologia: [75,9,2,"biologia"],
	bbdd: [98,9,1,"bbdd"],
	algebra: [100,10,4,"algebra"]
}

const aprobo = ()=> {

	for (materia in materias){
		let asistencias = materias[materia][0];
		let promedio = materias[materia][1];
		let trabajo = materias[materia][2];
        console.log(materias[materia][3]);

		if (asistencias >= 90) {
			console.log("   %caprobado","color:green");
		}
		else  {
			console.log("   %cdesaprobado","color:red");
		}
		if (promedio >= 7) {
			
			console.log("   %cPromedio en orden","color:green");
		}
		else  {
			console.log("   %cPromedio desaprobado","color:red");
		}
		if (trabajo >= 3) {
			
			console.log("   %cTrabajos practicos en orden","color:green");
		}
		else  {
			console.log("   %cFaltan trabajos practicos","color:red");
		}
	}
}
aprobo();