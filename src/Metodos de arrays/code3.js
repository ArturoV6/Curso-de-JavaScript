//metodos de repeticion 

    let nombres2 = ["carlo", "maria", "fulano", "juana"];

    let newNames = nombres2.filter(nombres2 => nombres2.length > 5) //Solo aparecera el nombre "fulano"

    console.log(newNames);

//filter y forEach son casi lo mismo ponen en el array un elemento como si fuera una iteracion pero la diferencia es que filter es con condicional, puede 
//filtrar los elemntos y forEach no


    newFunction(); 

    function newFunction() {
        let nombres1 = ["carlos", "maria", "fulano", "juana"];

        nombres1.forEach(function (nombres1) {
            console.log("mi nombre es " + nombres1);
        });
    }