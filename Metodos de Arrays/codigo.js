let nombres = ["laura", "pilar", "agustin"];

// metodos transformadores
let resultado = nombres.pop(); // elimina el ultimo elemento de un array y lo devuelve.
document.write(resultado + "<br>");

resultado = nombres.shift(); // elimina el primer elemento de un array y lo devuelve.
document.write(resultado + "<br>");

resultado = nombres.push("liliana", "jorge"); // agrega un elemento al array al final de la lista.
document.write(nombres + "<br>");

let numeros = [1,2,3,4,5];

resultado = numeros.reverse(); // invierte el orden de los elementos de un array.
document.write(resultado + "<br>");

resultado = numeros.unshift(0,1,2); // agraga elementos al inicio de un array y devuelve una nueva longitud del array.
document.write(numeros + "<br>");

let frutas = ["manzana", "pera", "banana", "anana","kiwi"];
resultado = frutas.sort(); // ordena los elementos de un array y devuelve el array ordenado.
document.write(frutas + "<br>");

resultado = frutas.splice(-1,0,"fresa","quinoto","naranja");  // elimina o agrega elementos nuevos al array, siempre se debe detallar en que orden se agregan o eliminan dichos elementos.
document.write(frutas + "<br>");

// metodos accesores
document.write(frutas + "<br>")
resultado = frutas.join(" - "); // une los elementos de una matriz en una cadena y los devuelve.
document.write(resultado + "<br>");

resultado = frutas.slice(0,-1); // nos devuelve un array dentro de un nuevo array, empezando desde el inicio hasta el fin(no incluido).
document.write(resultado + "<br>");

// metodos de repeticion
resultado = frutas.filter(fruta => fruta.length > 5); // crea un nuevo array con todos los elementos que cumplen la condicion.
document.write(resultado);

frutas.forEach(function (fruta){
    document.write(fruta + "<br>"); // ejecuta la funcion indicada una vez por cada elemento del array.
})



