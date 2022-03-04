// Fuciones de Registro
console.assert(2 > 4) // Muestra en consola un error, ya que no es verdad que 2 es mayor a 4
console.clear() // limpia la consola
console.error("Que paso?") // muestra en console el valor del error que pasamos: Que paso?
console.info("Muy bien tu trabajo, lastima que ya no se usa") // el mensaje aparece en consola
console.log("Hola soy laura") // es un mensaje de depuracion, muestra en consola el mensaje
console.table([2,5,6,7,3,4,1,34,15]) // forma de crear una tabla con console.
console.warn("Venis bien, pero cuidado porque...") // te tira una advertencia en consola
console.dir([2,5,6,7,3,4,1,34,15]) // despliega una lista de las propiedades del objeto que pasamos

// Funciones de Contes
console.count() // registra el numero de veces que se llama a count()
console.countReset() // resetea el contador console.count()

// Funciones de Agrupacion
console.group() // crea un nuevo grupo en linea en el registro de la consola
console.groupEnd() // remueve el grupo en linea en el registro de la consola
console.groupCollapsed() // crea un grupo en linea pero contraido, puede ser expandido porel usuario para verlo

// Funciones de Temporizacion
console.time() // inicia un temporizador
console.timeLog() // detiene el temporizador, nos dice cuanto tiempo paso desde que inicio el temporizador
console.timeEnd // registra elvalor actual del temporizador