let cantidad = prompt("cuantos alumnos son?");
let alumnosTotales = [];

for (i = 0; i < cantidad; i++){
	alumnosTotales[i] = [prompt("Nombre del alumno "+ (i+1)),0];
            

}

const tomarAsistencia = (nombre,p)=>{
	let presencia = prompt(nombre);
	if (presencia == "P" || presencia == "p") {
		alumnosTotales[p][1]++;
	}
}
for (i = 0; i < 5; i++) {
	for(alumno in alumnosTotales){
		tomarAsistencia(alumnosTotales[alumno][0],alumno);

	}
 
}
for(alumno in alumnosTotales){
	let resultado = `${alumnosTotales[alumno][0]}:<br> 
    _____________Presentes: <b>${alumnosTotales[alumno][1]}</b> <br>
    _____________Ausentes: <b>${5 - alumnosTotales[alumno][1]} </b>`;
    if (5 - alumnosTotales[alumno][1] > 2) {
    	resultado+= "<b style='color:red'>REPROBADO POR INASISTENCIAS</b><br><br>";
    }else{
    	resultado+= "<br><br>";
    }
    document.write(resultado);
}
