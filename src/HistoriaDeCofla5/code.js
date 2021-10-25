const a = 4;
const b = 40;
const c = 25;


const materias = {
    fisica: [a, b, c],
    biologia: [7, 34, 37],
    español: [2, 14, 37]
};

function calcular(asistencia, examen, trabajitos) {
    const result = asistencia + examen + trabajitos;
    return result;
}

const aprobar = () =>{
    for (materia in materias) {
        const cantidadMinima = 60;
        let asistencia = materias[materia][0];
        let examen = materias[materia][1];
        let trabajitos = materias[materia][2];
        let valorFinal = calcular(asistencia, examen, trabajitos);
        if (valorFinal >= 60) {
            console.log(`feliciddes aprobaste ${materia} con un ${valorFinal}`);
        } else if(valorFinal < cantidadMinima){
            console.log(`la cagaste reprobaste ${materia} con un ${valorFinal}`);
        }else{
            console.log("no as ido a la escuela apor un año (final secreto)")
        }
    }
}

aprobar(); 