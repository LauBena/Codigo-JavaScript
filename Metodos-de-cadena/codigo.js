let cadena = "cadena de prueba utilizada para practica.";
let cadena2 = "cadena";


resultado = cadena.concat(" hola"); //retorna: cadena de prueba para practica hola.
document.write(resultado);

//BUSCAR CADENAS Y DEVOLVERNOS UN VALOR

resultado = cadena.startsWith(cadena2); //retorna: true.
document.write(resultado);

resultado = cadena.endsWith(cadena2); //retorna: false.
document.write(resultado);

resultado = cadena.includes(cadena2); //retorna: true, ya que "cadena" se encuentra dentro de cadena1.
document.write(resultado);

resultado = cadena.indexOf("practica"); //retorna: 32. Esto nos indica que la palabra "practica" comienza en la posicion 32.
document.write(resultado);
resultado = cadena.indexOf("hola"); //retorna: -1. Ya que la cadena buscada no existe.
document.write(resultado);

resultado = cadena.lastIndexOf("."); //retorna: 40. Ya que nos devuelve el ultimo indice del primer caracter de la cadena.
document.write(resultado);
resultado = cadena.lastIndexOf("chau"); //retorna: -1, xq el no existe.
document.write(resultado);

//MODIFICAR CADENA Y RELLENAR 

let caracteres = "abcd"

resultado = caracteres.padStart(7, "l"); //retorna: lllabcd. Rellena la cadena al principio para que cumpla con la cantidad de caracteres que quiero y con el texto o numero que yo quiero.
document.write(resultado);               // no es oficial.

resultado = caracteres.padEnd(9, "efghij"); //retorna: abcdefghij. Agrega el texto o numero al final de la cadena.
document.write(resultado);

resultado = caracteres.repeat(3); //retorna: la cantidad de veces que querramos repetir nuestra cadena.
document.write(resultado);

//TRANSFORMAN A LA CADENA
let cadena3 = "ABCDEFG";
let cadena4 = 50;


resultado = cadena3.split("como"); //Divide la cadena como se lo pidamos.
document.write(resultado);

resultado = cadena3.substring(0,2); //retorna el pedazo de cadena que queremos mostrar.
document.write(resultado);

resultado = cadena3.toLowerCase(); // retorna todo a minuscula.
document.write(resultado);

resultado = cadena3.toUpperCase(); // retorna todo a mayuscula.
document.write(resultado);

resultado = cadena4.toString(); // convierte a string un dato.
document.write(2 / resultado);

resultado = cadena.trim(); // remueve los espacios en blanco al principio y al final de la cadena.
document.write(resultado.length);

resultado = cadena.trimEnd(); // elimina los espacios al final de mi cadena.
document.write(resultado);

resultado = cadena.trimStart(); // elimina los espacios al inicio de mi cadena.
document.write(resultado);