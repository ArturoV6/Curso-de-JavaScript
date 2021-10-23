function obtenerInfo(materia) {
    materias = {
        español: ["Dalto", " pedro", " fulano", " maria", " roberto", " fulana"],
        matematicas: ["Dalto", " pedro", " juana", " fulano", " maria",],
        fisica: ["Dalto", " juana", " fulana", " maria", " roberto", " fulana"],
        biologia: ["Dalto", " pedro", " juana", " roberto", " fulana"]
    };
    if (materias[materia] !== undefined) {
        return [materias[materia], materia];
    } else if (materias[materia] == undefined) {
        return false;
    }
}

const obtenerLoDemas = (materia) => {

    let info = obtenerInfo(materia);

    if (info !== false) {

        const saludar = newFunction();

        saludar(info);

        

        function newFunction() {
            return (estudiante) => {
                let remover = info.splice(1, 4);
                let remover2 = estudiante[0].slice(1, 6);
                let otraVez = estudiante[0].slice(0, 1);
                console.log(`El profesor de la clase de ${remover} es ${otraVez} y los alumnos son:${remover2}`);
                function obteenrinfo(alumno){
                    let numeros = 0;
                    for (infos in info[0]) {
                        if (info[0][infos].includes(alumno)) {
                            console.log(`el alumno ${alumno} esta en la clase de ${remover}`)
                        }
                    }
                }
                 obteenrinfo("pedro")  
            };
        };
    } else if (info == false) {
        console.log("tu materia no esta en el calendario");
    } else {
        console.log("?????");
    };      
}



obtenerLoDemas("biologia");
obtenerLoDemas("español");
obtenerLoDemas("fisica");