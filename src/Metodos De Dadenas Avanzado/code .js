let cadenaDePrueba = "cadena de prueba ";
let cadenaDePrueba2 = "cadena de prueba 2 ";

//Esto concatena
resultado = cadenaDePrueba.concat(cadenaDePrueba2 + "hola");

//-----------------------------*---------------------------//

//esto nos dice si termina nuestra cadena con el valor referido
let cadena = "cadena de prueba";
let cadena2 = "cadena"

resultado2 = cadena.startsWith(cadena2); //true

//-----------------------------*---------------------------//

let cadenasVerdaderas = "sigo a fulano en instagram";
let cadenasVerdaderas2 = "sigo a fulano en instagram";

resultado3 = cadenasVerdaderas.includes(cadenasVerdaderas2); //true

//-----------------------------*---------------------------//

let cadenasValue = "me gusta la prog prog prog";
let cadenasValue2 = "p"

resultado4 = cadenasValue.indexOf(cadenasValue2);
resultado4 = cadenasValue.lastIndexOf(cadenasValue2);

console.log(cadenasValue[0]);

//-----------------------------*---------------------------//

//consoles
console.log(resultado);
console.log(resultado2);
console.log(resultado3);
console.log(resultado4);