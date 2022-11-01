let materias = {
		//fisica: ["rafael","pedro","pepito","cofla","maria"],
		//programacion: ["deivis","pedro","juan","pepito"],
        //logica: ["joan","pedro","juan","pepito","cofla","maria"],
        //quimica: ["andry","pedro","juan","pepito","cofla","maria"]
        fisica: ["cofla","maria"],
		programacion: ["juan","pepito"],
        logica: ["cofla","maria"],
        quimica: ["cofla","maria"]

	}

const inscribir = (alumno,materia)=>{
	personas = materias[materia];
	//personas.shift();
	alumnos = personas;
	//document.write(alumno);
	if(personas.length >= 3) {
		document.write(`lo siento ${alumno}, las clase de la materia ${materia} ya estan llenas<br><br>`);

	} else {
		personas.push(alumno);
		if (materia == "fisica"){
			    materias = {
			    fisica: personas,
		        programacion: materias['programacion'],
                logica: materias['logica'],
                quimica: materias['quimica']

            }
		}
		else if (materia == "programacion") {
		        materias = {
			    fisica: materias['fisica'],
		        programacion: personas,
                logica: materias['logica'],
                quimica: materias['quimica']

		}
	}
		else if (materia == "logica") {
			    materias = {
			    fisica: materias['fisica'],
		        programacion: materias['programacion'],
                logica: personas,
                quimica: materias['quimica']

		}
	}
		else if (materia == "quimica") {
			    materias = {
			    fisica: materias['fisica'],
		        programacion: materias['programacion'],
                logica: materias['logica'],
                quimica: personas
            }
	    }

	    document.write(`!Felicidades ${alumno} te has inscrito a ${materia} correctamente <br>`);
	}
}

document.write(materias["fisica"] + "<br>");
inscribir("pedrito","fisica");
//inscribir("rosa","fisica");
//inscribir("fernando","fisica");
//inscribir("leon","fisica");

document.write("<br>" + materias["fisica"]);