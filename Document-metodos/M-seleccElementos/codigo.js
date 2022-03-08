parrafo = document.getElementById("parrafo"); // selecciona un elemento por ID
document.write(parrafo + "<br>") // muestra en pantalla [objeto HTMLParagraphElement]

parrafo = document.getElementsByTagName("p"); // selecciona todos los elementos con el nombre de la etiqueta seleccionada
document.write(parrafo + "<br>"); // muestra en pantalla [objeto HTMLCollection]

parrafo = document.querySelector(".parrafo"); // devuelve el primer elemento que coincida con el grupo especificado de selectores
document.write(parrafo + "<br>"); // [object HTMLParagraphElement] nos devuelve un solo elemento (segun elque detallemos)

parrafo = document.querySelectorAll(".parrafo"); // devuelve todos los elementos que coincidan con el grupo especificado de selectores
document.write(parrafo); // [object NodeList]
