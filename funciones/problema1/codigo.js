let free = false;

const validarCliente = (time)=>{
    let edad = prompt("Cual es tu edad?");
    if(edad > 18){
        if(time >= 2 && time < 7 && free === false){
            alert("Podes pasar gratis porque sos la primer persona en pasar despues de las 2 AM");
            free = true;
        } else{
            alert(`son las ${time}:00Hs y podes pasar, pero tenes que pagar la entrada`);
        }
    } else{
        alert("Sos menor de edad, no puedo dejarte entrar!");
    }
}

validarCliente(1.4);
validarCliente(23);
validarCliente(0.6);
validarCliente(2.4);
validarCliente(3);
validarCliente(0.2);