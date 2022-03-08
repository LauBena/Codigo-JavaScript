const rangoEtario = document.querySelector(".rangoEtario");
document.write(rangoEtario); // [object HTMLInputElement]

rangoEtario.setAttribute("type","text"); // modificamos el valor de un atributo. pasamos de type: range a type: text.

valorDelAtributo = rangoEtario.getAttribute("type"); //obtiene el valor del atributo.
document.write(valorDelAtributo); // text.

valorDelAtributo = rangoEtario.removeAttribute("type"); // remueve el valor de un atributo.
document.write(valorDelAtributo);