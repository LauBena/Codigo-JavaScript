// Un alumno termino el primer semestre y no sabesi aprobara o no las materias, para lograrlo necesitara:
// contar con al menos el 90% de asistencia
// el promedio por materia debe ser al menos 7 / 10
// debe tener al menos el 75% de los trabajos practicos entregados

// Solicitar los datos y decirle si aprueba o no.
const materias = {
    fisica: [90,6,4,"fisica"],
    programacion: [84,8,2,"programacion"],
    matematica: [92,8,4,"matematica"],
    logica: [96,8,4,"logica"],
    calculo: [91,6,3,"calculo"],
    quimica: [79,7,4,"quimica"],
    bbdd: [75,9,2,"bbdd"],
    biologia: [98,9,1,"biologia"],
    algebra: [100,10,4,"algebra"]
}

const aprobo = ()=>{
    for(materia in materias){
        let asistencias = materias[materia][0];
        let promedio = materias[materia][1];
        let trabajos = materias[materia][2];

        console.log(materias[materia][3])

        if(asistencias >= 90){
            console.log("%c   Asistencias en orden","color:green"); // Mostrar todo esto con colores representativos en consola (ej: no aprobar en rojo)
        } else{
            console.log("%c   Falta de asistencias","color:red");
        }

        if(promedio >= 7){
            console.log("%c   Promedio en orden","color:green");
        } else{
            console.log("%c   Promedio desaprobado","color:red");
        }

        if(trabajos >= 3){
            console.log("%c   Trabajos practicos en orden","color:green");
        } else{
            console.log("%c   Faltan trabajos practicos","color:red");
        }
    }
}

aprobo()
