class Celular{
    constructor(color, peso, rdp, rdc, ram){
        this.color = color;
        this.peso = peso;
        this.rdp = rdp;
        this.rdc = rdc;
        this.ram = ram;
        this.encendido = false;
    }
    precionarBotonEncendido(){    //Creamos funcionalidad de boton de encendido y apagado
        if(this.encendido == false){
            alert("Celular prendido");
            this.encendido = true;
        } else{
            alert("Celular apagado");
            this.encendido = false;
        }
    }
    reiniciar(){     //funcionalidad reiniciar
        if(this.encendido == true){
            alert("Reiniciando celular");
        } else{
            alert("El celular esta apagado");
        }
    }
    tomarFoto(){        //funcionalidad tomar fotografia
        alert(`Foto tomada en una resolucion de: ${this.rdc}`);
    } 
    grabarVideo(){       //funcionalidad grabar video
        alert(`Grabando video en ${this.rdc}`);
    }   
    mobileInfo(){
        return `
        Color: <b>${this.color}</b><br>
        Peso: <b>${this.peso}</b><br>
        Tamano: <b>${this.rdp}</b><br>
        Resolucion: <b>${this.rdc}</b><br>
        Memoria Ram: <b>${this.ram}</b><br>
        `;
    }
}

class CelularAltaGama extends Celular{
    constructor(color, peso, tamano, rdc, ram, rdce){
        super(color,peso,tamano, ram, rdc, rdce);
        this.resolucionDeCamaraExtra = rdce;
    }
    grabarVideoLento(){
        alert("Estas grabando en camara lenta");
    }
    reconocimientoFacial(){
        alert("Estamos por iniciar el reconocimiento facial");
    }
    infoAltaGama(){
        return this.mobileInfo() + `Resolucion de Camara Extra: ${this.resolucionDeCamaraExtra}`;
    }
}
celular1 = new Celular("celeste", "150gr", "5'", "hd", "2GB");
celular2 = new Celular("rojo", "155gr", "5.4'", "full hd", "1GB");
celular3 = new Celular("azul", "167gr", "6'", "full hd", "2GB");

celular4 = new CelularAltaGama("rosa", "129gr", "5.5'", "4K", "3GB", "full hd");
celular5 = new CelularAltaGama("turquesa", "135gr", "5.9'", "4K", "4GB", "hd");


document.write(`
${celular1.mobileInfo()}<br>
${celular2.mobileInfo()}<br>
${celular3.mobileInfo()}<br>
`);

document.write(`
${celular4.infoAltaGama()}<br><br>
${celular5.infoAltaGama()}<br>
`)



