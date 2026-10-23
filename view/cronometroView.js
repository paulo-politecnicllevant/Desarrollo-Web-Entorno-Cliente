function pintarCronometroInit() {
    let cronoInterval;
    let cronometre
    let cronometrePause = false;
    let elapsedTime;

    const horas = leadZero(0, 2)
    const minutos = leadZero(0, 2)
    const segundos = leadZero(0, 2)
    const milisegundos = leadZero(0, 3)

    const div = document.createElement('div')
    div.id = 'cronometro'
    div.innerHTML = `${horas}:${minutos}:${segundos}.${milisegundos}`

    document.querySelector("#app").appendChild(div)

    //Pintar boto START
    const botonStart = document.createElement("button")
    botonStart.textContent = "START"
    document.querySelector("#app").appendChild(botonStart)

    botonStart.addEventListener("click", function(){
        if(cronometre === null || cronometre === undefined){
            cronometre = initCronometro();
        }
        if(cronometrePause){
            cronometrePause = false;
            cronometre.restore(elapsedTime)
        }
        pintarCronometro(cronometre)
        cronoInterval = setInterval(function(){
            console.log("Entra...")
            pintarCronometro(cronometre)
        }, 1)
    })

    //Pintar boto PAUSE
    const botonPause = document.createElement("button")
    botonPause.textContent = "PAUSE"
    document.querySelector("#app").appendChild(botonPause)

    botonPause.addEventListener("click", function(){
        clearInterval(cronoInterval)
        cronometrePause = true
        elapsedTime = cronometre.elapsed();
    })

    //Pintar boto STOP
    const botonStop = document.createElement("button")
    botonStop.textContent = "STOP"
    document.querySelector("#app").appendChild(botonStop)

    botonStop.addEventListener("click", function(){

    })
}

function pintarCronometro(cronometro) {
    const horas = leadZero(cronometro.hora(), 2)
    const minutos = leadZero(cronometro.minut(), 2)
    const segundos = leadZero(cronometro.segon(), 2)
    const milisegundos = leadZero(cronometro.milisegon(), 3)

    const div = document.querySelector("#cronometro")
    div.innerHTML = `${horas}:${minutos}:${segundos}.${milisegundos}`

}

function leadZero(numero, numZeros){
    let result = "";
    let numeroString = "" + numero

    if(numeroString.length < numZeros){
        for(let i = numeroString.length; i < numZeros; i++){
            result += "0"
        }
    }
    return result + numero;
}