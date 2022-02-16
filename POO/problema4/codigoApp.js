class App{
    constructor(nombre, descargas, puntuacion, peso){
        this.nombre = nombre;
        this.descargas = descargas;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.iniciada = false;
        this.instalada = false;
    }
    abrir(){
        if(this.iniciada == false && this.instalada == true){
            this.iniciada = true;
            alert("App iniciada");
        }
    }
    cerrar(){
        if(this.iniciada == true && this.instalada == true){
            this.iniciada = false;
            alert("App cerrada");
        }
    }
    instalar(){
        if(this.instalada == false){
            this.instalada = true;
            alert("App instalada correctamente");
        }
    }
    desinstalar(){
        if(this.instalada == true){
            this.instalada = false;
            alert("App desinstalada correctamente");
        }
    }
    appInfo(){
        return `
        Descargas: <b>${this.nombre}</b><br>
        Descargas: <b>${this.descargas}</b><br>
        Descargas: <b>${this.puntuacion}</b><br>
        Descargas: <b>${this.peso}</b><br>
        `
    }
}

app1 = new App("Telegram", "16.000", "4.5 estrellas", "900mb");
app2 = new App("Instagram", "100.000", "5 estrellas", "790mb");
app3 = new App("Netflix", "10.000", "4.2 estrellas", "980mb");
app4 = new App("Snapchat" ,"25.000", "4.7 estrellas", "890mb");
app5 = new App("Duolingo" ,"14.000", "4 estrellas", "1gb");
app6 = new App("Discord" ,"9.000", "4.2 estrellas", "730mb");
app7 = new App("Twitter" ,"87.000", "5 estrellas", "990mb");

document.write(`
${app1.appInfo()}<br>
${app2.appInfo()}<br>
${app3.appInfo()}<br>
${app4.appInfo()}<br>
${app5.appInfo()}<br>
${app6.appInfo()}<br>
${app7.appInfo()}<br>
`
)