//metodos de repeticion 

    let nombres = ["carlos", "maria", "fulano", "juana"];

    let newNames = nombres.filter(nombres => nombres.length > 4) 

    console.log(nombres)

//filter y forEach son casi lo mismo ponen en el array un elemento como si fuera una iteracion pero la diferencia es que filter es con condicional, puede 
//filtrar los elemntos y forEach no


    newFunction(); 

    function newFunction() {
        let nombres = ["carlos", "maria", "fulano", "juana"];

        nombres.forEach(function (nombres) {
            console.log("mi nombre es " + nombres);
        });
    }