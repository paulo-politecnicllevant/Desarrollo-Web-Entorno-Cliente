function pintarCronometroInit() {
    const crono = initCronometro();

    const horas = leadZero(crono.hora(), 2)
    const minutos = leadZero(crono.minuto, 2)
    const segundos = leadZero(crono.segundo, 2)
    const milisegundos = leadZero(crono.milisegundo, 3)

    const div = document.createElement('div')
    div.id = 'cronometro'
    div.innerHTML = `${horas}:${minutos}:${segundos}.${milisegundos}`

    document.querySelector("#app").appendChild(div)

    //Pintar boto START
    const botonStart = document.createElement("button")
    botonStart.textContent = "START"
    document.querySelector("#app").appendChild(botonStart)

    botonStart.addEventListener("click", function(){
        setInterval(function(){
            console.log("Entra...")
            crono.segundo++
            pintarCronometro(crono)
        }, 1000)
    })

    //Pintar boto PAUSE
    const botonPause = document.createElement("button")
    botonPause.textContent = "PAUSE"
    document.querySelector("#app").appendChild(botonPause)

    //Pintar boto STOP
}

function pintarCronometro(cronometro) {
    const horas = leadZero(cronometro.hora(), 2)
    const minutos = leadZero(cronometro.minuto, 2)
    const segundos = leadZero(cronometro.segundo, 2)
    const milisegundos = leadZero(cronometro.milisegundo, 3)

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