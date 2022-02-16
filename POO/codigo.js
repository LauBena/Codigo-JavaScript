class Animal {
    constructor(especie, edad, color){
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.info = `Soy un ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}`;
    }
    verInfo(){  //creamos el metodo verInfo
        document.write(this.info + "<br>")
    }
}

//Herencia
class Perro extends Animal {
    constructor(especie, edad, color, raza){
        super(especie, edad, color);
        //this.raza = raza;
        this.raza = null;
    }
    /*static ladrar(){  //Metodo estatico
        alert("WOW!");
    }*/
    set setRaza(newName){    //Metodo set (tomado como propiedad)
        this.raza = newName;
    }
    get getRaza(){
        return this.raza;    //Metodo get (para recibir informacion)
    }

}

const perro = new Perro("perro",5,"marron", "Doberman");
const gato = new Animal("gato",2,"blanco");
const gorila = new Animal("gorila",3,"negro");


perro.modificarRaza = "Pedro";
document.write(perro.raza);
//Perro.ladrar();
//gato.ladrad();
//gorila.ladrar();

