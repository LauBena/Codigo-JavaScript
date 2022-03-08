const input = document.querySelector(".input-normal");

document.write(input.className); // nos muestra lo que tiene dentro de nuestra class en html.

document.write(input.value); // nos muestra el valor del input colocado en html.

//input.type = "number"; // de esta manera podemos modificar el atributo type.

input.accept = "image/png"; // en este caso aceptara que se introduzcan solo imagenes jpg.

input.form // nos permite ejecutar un input dentro de un form(formulario).

input.minLength = 5; // nos indica la cantidad de caracteres que tiene que tener (como minimo) el formulario para que sea enviado.

input.placeholder = "Que pasa?"; // modifica directamente la propiedad placeholder.

input.required = " "; // nos dice si completarlo es requerido o no.

