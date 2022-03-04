let materias = {
    fisica: ["Perez","maria", "pilar", "agustin", "federico"],
    programacion: ["Rodriguez","mario", "federico", "laura", "agustin"],
    logica: ["Benavidez","maria", "pilar", "laura", "mario"],
    quimica: ["Hernandez","agustin", "mario", "laura", "pilar", "federico"]
}

const inscribir = (alumno,materia)=>{
    personas = materias[materia];
    if(personas.length >= 21){
        document.write(`Lo siento ${alumno}, las clases de ${materia} ya estan llenas`);
    } else{
        personas.push(alumno);
        if(materia == "fisica"){
            materias = {
                fisica: personas,
                programacion: materias['programacion'],
                logica: materias['logica'],
                quimica: materias['quimica']
            }
        }
    else if(materia == "progrmacion"){
        materias = {
            fisica:  materias['fisica'],
            programacion: personas,
            logica: materias['logica'],
            quimica: materias['quimica']
        }
    }
    else if(materia == "logica"){
        materias = {
            fisica:  materias['fisica'],
            programacion: materias['programacion'],
            logica: personas,
            quimica: materias['quimica']
        }
    }
    else if(materia == "quimica"){
        materias = {
            fisica:  materias['fisica'],
            programacion: materias['programacion'],
            logica: materias['logica'],
            quimica: personas
        }
    }
    document.write(`<b>Felicidades ${alumno}! te has inscripto a ${materia} correctamente</b><br>`)
}
}

document.write(materias['programacion'] + "<br><br>");

inscribir("liliana", "programacion");

document.write("<br>" + materias['programacion']);
