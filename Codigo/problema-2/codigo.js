//El alumno sufre un poco.. ya que, a pesar de que cree contar con el 90% de asistencias y tener un promedio mayor 
//a 7/10, no cree entregar el 75% d etrabajos practicos ya que necesita dividir las tareas
//que hara semanalmente, debe tranajar 8 horas por dia durante 2 semanas entre las cuales tiene que: 24 hotas estudiar, 24 horas hacer trabajos
//practicos, 56 horas trabajar, 8 horas de hacer las cosas de la casa.

let tp = "100 minutos hacer trabajos practicos";
let estudio = "100 minutos de estudio";
let trabajo = "240 minutos de trabajo";
let homework = "30 minutos cosas de la casa";
let descanso = "10 minutos de descanso";

console.log("TAREAS");
for(var i = 0; i < 14; i++){
    if(i == 0){
        console.log("Semana 1")
    }
    console.groupCollapsed("Dia " + (i+1));
    console.log(trabajo);
    console.log(descanso);
    console.log(estudio);
    console.log(tp);
    console.log(homework);
    console.groupEnd();
    if(i == 7){
            console.groupEnd();
            console.groupCollapsed("Semana 2")
    }
}

console.groupEnd();
console.groupEnd();