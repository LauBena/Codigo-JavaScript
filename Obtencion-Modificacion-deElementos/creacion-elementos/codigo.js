const contenedor = document.querySelector(".contenedor");

const fragmento = document.createDocumentFragment(); // se crea un objeto vacio, el cual queda listo para que pueda insertarsele nodos en el.

for(i=0; i<20; i++){
const item = document.createElement("LI"); // crea un nuevo elemento.
item.innerHTML = "Este es un item de la lista";
fragmento.appendChild(item); // permite agregar un nodo dentro de otro.
};

contenedor.appendChild(fragmento);
console.log(contenedor);