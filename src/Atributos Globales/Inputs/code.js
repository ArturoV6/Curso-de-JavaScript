const input = document.querySelector(".input-normal");

//muestra el nombre de la clase
document.write(input.className);

//muestra el valor del input
document.write(input.value);

//agrega una clase
input.classList.add("grande")

//verifica si contiene un atributo
let cosa = input.classList.contains("grandesss")

document.write(cosa);