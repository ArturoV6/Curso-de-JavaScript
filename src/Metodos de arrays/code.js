//metodos transformadores 
let nombres = ["pedro", "maria", "jorge"];

//remover ultimo elemento del array
//aqui almacenamos el elemento removido
let resultado = nombres.pop()

console.log(resultado);
console.log(nombres);

//-----------------------*------------------//

let nombres2 = ["juan", "carlos", "juana"];

//remover primer elemento de array
let resultado2 = nombres2.shift();
console.log(resultado2);
console.log(nombres2);

//-----------------------*------------------//

let frutas = ["pera", "uva", "sandia"];

//agregar elemento al array
let fruta = frutas.push("fresa");

console.log(frutas);
console.log(fruta);

//-----------------------*------------------//

let numeros = ["1", "2", "3", "4"];

console.log(numeros);

//devuelve el array al revez
let numero = numeros.reverse();

console.log(numero);

//este metodo coloca el valor en el primer lugar del array
let number = numeros.unshift("0", "1", "2");

console.log(numeros)

//-----------------------*------------------//

let abecedario = ["a", "d", "c", "b"];

//ordena el texto de un modo grafico lexico
let abecedarioOrdenado = abecedario.sort();

console.log(abecedarioOrdenado);

//-----------------------*------------------//

let infoEconomica = ["100$", "$500", "$900", "$300"];

//elimina la informacion de la posicion declarada pero tambien la informacion se puede agregar
let economiInfo = infoEconomica.splice(0, 3);
//empieza en 0 termina en 3 y elimina lo restante
console.log(economiInfo);

let infoEconomica = ["100$", "$500", "$900", "$300"];
//empieza en 2 y termina en 0 por lo que no elimina elemtos ya que puse 0 en la seguna posicion y por ende se agrega newInfo despues de "$500"
let newInfo = infoEconomica.splice(2, 0,  "$800", "$200")

console.log(infoEconomica);

//-----------------------*------------------//