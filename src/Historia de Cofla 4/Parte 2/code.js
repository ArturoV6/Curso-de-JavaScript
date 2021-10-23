    const materias = {
        fisica: ["Perez","pedro","pepito","cofla","maria"],
        programacion: ["Dalto","pedro","juan","pepito"],
        logica: ["Hernandez","pedro","juan","pepito","cofla","maria"],
        quimica: ["Rodriguez","pedro","juan","pepito","cofla","maria"]
    }

    const obtenerInformacion = (materia)=>{

    if (materias[materia] !== undefined){
        return [materias[materia],materia,materias];
        } else {
        return materias;
        }
    }

    const mostrarInformacion = (materia)=>{
    let informacion = obtenerInformacion(materia);

    if (informacion !== false) {
    let profesor = informacion[0][0];
    alumnos = informacion[0];
    alumnos.shift();
    console.log((`El profesor de ${informacion[1]} es ${profesor} Los alumnos son: <b style="color:blue">${alumnos}`));
    }
    }

    const cantidadDeClases = (alumno)=>{
    let informacion = obtenerInformacion();
    let clasesPresentes = [];
    let cantidadTotal = 0;
    for (info in informacion) {
        if (informacion[info].includes(alumno)) {
            cantidadTotal++;
            clasesPresentes.push(" "+ info);
        }
    }
    return `
    ${alumno} ${cantidadTotal} clases: ${clasesPresentes}`;
    }


    mostrarInformacion("fisica");
    mostrarInformacion("quimica");
    mostrarInformacion("programacion");
    mostrarInformacion("logica");

    console.log((cantidadDeClases("cofla")));
    console.log((cantidadDeClases("pedro")));