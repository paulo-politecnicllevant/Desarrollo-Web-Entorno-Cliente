function Crono(){
    const fechaInicial = Date.now()
    this.hora = function (){
        const ahora = Date.now()
        const elapsedTime = ahora - fechaInicial
        //TODO
        return elapsedTime;
        //return ahora - fechaInicial --> horas
    }
    /*
    this.hora = hora;
    this.minuto = minuto;
    this.segundo = segundo;
    this.milisegundo = milisegundo;
     */
}