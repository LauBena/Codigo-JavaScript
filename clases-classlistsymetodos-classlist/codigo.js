const titulo = document.querySelector(".titulo");

titulo.classList.add("grande"); // A;ade una clase.

titulo.classList.remove("grande"); // Elimina/remueve una clase.

let valor = titulo.classList.item(2); // Nos devuelve la clase del indice especificado entre parentesis.
document.write(valor + "<br>");

nombreDeClase = "grande"
let existe = titulo.classList.contains(nombreDeClase);
if(existe){
    titulo.classList.remove(nombreDeClase); // En caso de que la clase exista, la limina.
} else{
    titulo.classList.add(nombreDeClase); // En caso de que la clase no exista, la agrega.
}


titulo.classList.toggle("circular"); // Si no existe la clase especificada, la cre. Si existe, la elimina.

titulo.classList.replace("circular", "tirangular"); // Reemplaza una clase por otra. Si la clase no existe nos devuelve false.