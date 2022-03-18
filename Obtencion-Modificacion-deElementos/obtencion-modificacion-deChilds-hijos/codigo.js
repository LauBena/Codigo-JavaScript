const contenedor = document.querySelector(".contenedor"); 

const primerHijo = contenedor.firstChild; // Obtiene el primer hijo.
console.log(primerHijo);

const ultimoHijo = contenedor.lastChild; // obtiene el ultimo hijo
console.log(ultimoHijo);

const primerElementoHijo = contenedor.firstElementChild; // obtiene el primer elemento hijo.
console.log(primerElementoHijo);

const ultimoElementoHijo = contenedor.lastElementChild; // obtiene el ultimo elemento hijo.
console.log(ultimoElementoHijo);

const hijo = contenedor.childNodes; // nos devuelve todos los nodod hijos.
console.log(hijo);

const hijos = contenedor.children; // nos muestra los elementos hijos (solo etiquetas html).
console.log(hijos);

// Metodos de Childs (hijos)
const parrafo = document.createElement("p").innerHTML = "parrafo";
const h2_nuevo = document.createElement("H2");
h2_nuevo.innerHTML = "Titulo";

h2_antiguo = document.querySelector(".h2");

contenedor.replaceChild(h2_nuevo,h2_antiguo); // reemplaza un hijo po otro.

contenedor.removeChild(h2_antiguo); // remueve o elimina un hijo de un elemento padre.

let respuesta = h2_nuevo.hasChildNodes(); // nos sirve para verificar si tiene ono elementos hijos.
if(respuesta){
   document.write("El elemento tiene hijos");
} else{
   document.write("El elemento NO tiene hijos");
}

// Propiedades de Parents (padres)
console.log(contenedor.parentElement); //selecciona el padre elemento de un elemento (siempre busca una etiqueta html padre).

console.log(contenedor.parentNode); // selecciona el padre de un elemento (busca un nodo padre).

// Propiedades de Siblings (hermanos)
console.log(h2_nuevo.nextSibling); // nos muestra lo que le sigue al elemento seleccionado.

console.log(h2_antiguo.lastSibling); // nos muestra que se encuentra despues del elemento seleccionado

console.log(h2_antiguo.previousSibling); // nos muestra que se encuentra antes del elemento seleccionado

console.log(h2_nuevo.nextElementSibling); // nos muestra que elemento sigue despues del elemento seleccionado.

console.log(h2_nuevo.previousElementSibling); // nos muestra que elemento se encuentra antes del seleccionado.

console.log(h2_nuevo.lastElementSibling); // nos muestra que elemento sigue despues del seleccionado.

console.log(h2_nuevo.closest(".contenedor")); //nos retorna el elemento ascendente mas cercano. 