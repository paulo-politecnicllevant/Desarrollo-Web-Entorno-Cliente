function Crono(){
    let dataInicial = Date.now()

    function elapsedMs(){
        const ara = Date.now();
        return ara - dataInicial;
    }

    this.reset = function (){
        dataInicial = Date.now();
    }

    this.elapsed = function (){
        return elapsedMs()
    }

    this.restore = function (ms){
        dataInicial = new Date(Date.now() - ms);
        console.log(dataInicial);
    }

    this.hora = function (){
        return Math.floor(elapsedMs() / (1000*60*60));
        //return ara - dataInicial --> horas
    }

    this.minut = function (){
        return Math.floor(elapsedMs() / (1000*60)) % 60;
    }

    this.segon = function (){
        return Math.floor(elapsedMs() / (1000)) % 60;
    }

    this.milisegon = function (){
        return Math.floor(elapsedMs() % 1000);
    }
    /*
    this.hora = hora;
    this.minuto = minuto;
    this.segundo = segundo;
    this.milisegundo = milisegundo;
     */
}