const obtenerInformacion = (materia)=>{
	materias = {
		fisica: ["rafael","pedro","pepito","cofla","maria"],
		programacion: ["deivis","pedro","juan","pepito"],
        logica: ["joan","pedro","juan","pepito","cofla","maria"],
        quimica: ["andry","pedro","juan","pepito","cofla","maria"]

	}
	if (materias[materia] !== undefined) {
		return [materias[materia],materia];
	}else{
		return false;
	}

}

const mostrarInformacion = (materia)=>{

	let informacion = obtenerInformacion(materia);
        
        if (informacion !== false) {
        	//let profesor = obtenerInformacion(materia)[0][0];
        	//alumnos = obtenerInformacion(materia)[0];
        	let profesor = informacion[0][0];
        	alumnos = informacion[0];
        	alumnos.shift();
	        document.write(` El profesor de <b>${informacion[1]}</b> es: <b style="color:red" >${profesor}</b><br>
	        	Los alumnos son: <b style="color:blue">${alumnos}</b><br><br>
	       	`);
}
}

mostrarInformacion("fisica");
mostrarInformacion("programacion");
mostrarInformacion("logica");
mostrarInformacion("quimica");