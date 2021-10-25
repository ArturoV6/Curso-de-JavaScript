let pruebaDeInput = document.querySelector(".textos");

//modifica el input
pruebaDeInput.setAttribute("type", "range");

//--------------*--------------//

let pruebaDeInput2 = document.querySelector(".texto");

//obtiene el atributo especificado
document.write(pruebaDeInput2.getAttribute("type"))

//remueve ele atributo
pruebaDeInput.removeAttribute("type");

