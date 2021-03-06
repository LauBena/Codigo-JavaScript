const obtenerInformacion = (materia)=>{
    materias = {
        fisica: ["Perez","maria", "pilar", "agustin", "federico"],
        programacion: ["Rodriguez","mario", "federico", "laura", "agustin"],
        logica: ["Benavidez","maria", "pilar", "laura", "mario"],
        quimica: ["Hernandez","agustin", "mario", "laura", "pilar", "federico"]
    }
    if(materias[materia] !== undefined){
        return [materias[materia],materia,materias];
    } else{
        return materias;
    }
}

const mostrarInformacion = (materia)=>{
    let informacion = obtenerInformacion(materia);

if(informacion !== false){
    let profesor = informacion[0][0];
    let alumnos = informacion[0];
    alumnos.shift();
    document.write(`El profesor de <b>${informacion[1]}</b> es: <b style="color:red">${profesor}</b><br>
    Loa alumnos son: <b style="color:blue">${alumnos}</b><br><br>
    `);
}
}

const cantidadDeClases = (alumno)=>{
    let informacion = obtenerInformacion();
    let clasesPresentes = [];
    let cantidadTotal = 0;
    for(info in informacion){
        if(informacion[info].includes(alumno)){
            cantidadTotal++;
            clasesPresentes.push(" " + info);
        }
    }
    return `<b style='color:blue'>
    ${alumno}</b> esta en ${cantidadTotal} clases: <b style='color:green'>${clasesPresentes}</b><br><br>
    `;
}


mostrarInformacion("fisica");
mostrarInformacion("programacion");
mostrarInformacion("logica");
mostrarInformacion("quimica");

document.write(cantidadDeClases("laura"));
document.write(cantidadDeClases("pilar"));
