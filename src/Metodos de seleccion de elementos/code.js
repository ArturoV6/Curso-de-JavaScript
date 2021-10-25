//obtiene el elemento por el ID

let result = document.getElementById("parrafo");

//obtiene el elemento por la etiqueta

let result2 = document.getElementsByTagName("p");

//obtiene el elemento por el atributo especificado

let result3 = document.querySelector(".parrafo");
let result4 = document.querySelector("#parrafo");

//obtiene el elemento que coincida con el nombre del atributo no importa si es una clase o ID

let result5 = document.querySelectorAll("#parrafo");