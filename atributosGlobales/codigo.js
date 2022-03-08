const titulo = document.querySelector(".titulo");
titulo.setAttribute("contentEditable","true"); //"contentEditable" nos indica si el elemento puede ser modificado o no por el usuario (true o false).

titulo.setAttribute("dir", "rtl"); // nos indica la direccionalidad del texto. (ltr-izq a derecha y rtl-derecha a izq)

titulo.removeAttribute("hidden"); // indica si el elemento es relevante o no.

titulo.setAttribute("tabindex","0"); // indica si el elemento puede tener un focus de input.

titulo.setAttribute("title","importante"); // contiene texto con informacion correspondiente al elemento al que pertenece.

