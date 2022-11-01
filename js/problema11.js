let trabajo = "240 minutos de trabajo";
let estudio = "100 minutos de estudio";
let tp = "100 minutos para hacer trabajos practicos";
let homework = "30 minutos de cosas de la casa";
let descanso = "10 minutos de descanso";

console.log("Tareas");

for (var i = 0; i < 14; i++) {
	if (i == 0) {
		console.groupCollapsed("Semana 1");
	}
	console.groupCollapsed("dia "+ i);
	console.log(trabajo);
	console.log(descanso);
	console.log(estudio);
	console.log(tp);
	console.log(homework);
	console.groupEnd();

	if (i == 7) {
		console.groupEnd();
		console.groupCollapsed("Semana 2");
	}

}
console.groupEnd();
console.groupEnd();