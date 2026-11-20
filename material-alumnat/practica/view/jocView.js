function init(joc){
    //TITOL
    const titol = document.createElement("h1")
    titol.innerHTML = "Joc de daus"

    //SELECT
    const selectOpcioJugador = document.createElement("select")
    selectOpcioJugador.id = "selectOpcioJugador"

    const optionBuida = document.createElement("option")
    optionBuida.value = ""
    optionBuida.innerText = "------------"
    selectOpcioJugador.appendChild(optionBuida)

    const optionParell = document.createElement("option")
    optionParell.value = "parell"
    optionParell.innerText = "Parell"
    selectOpcioJugador.appendChild(optionParell)

    const optionSenar = document.createElement("option")
    optionSenar.value = "senar"
    optionSenar.innerText = "Senar"
    selectOpcioJugador.appendChild(optionSenar)

    //BOTONS
    const botoTirar = document.createElement("button")
    botoTirar.innerText = "Tira els daus"
    botoTirar.style.border = "1px solid black"
    botoTirar.addEventListener("click", function(){
        const valorJugada = document.querySelector("#selectOpcioJugador").value
        setJugada(joc, valorJugada)
        if(!validarJugada(joc)){
            document.querySelector("#missatge").innerHTML = "Error en la tirada"
            //Serveis
            addError(joc)
            //Vistes
            pintarErrors(valorError, joc)
        }else{
            document.querySelector("#missatge").innerHTML = ""
            joc.dau1 = tirarDau()
            joc.dau2 = tirarDau()

            calcularSuma(joc)
            const haGuanyat = comprovarResultat(joc)

            pintarDau(1, joc.dau1)
            pintarDau(2, joc.dau2)
            pintarSuma(textSuma, joc)
            pintarResultat(textResultat, haGuanyat)
            pintarMarcador(textMarcador, joc)
        }
    })

    const botoReinicia = document.createElement("button")
    botoReinicia.innerText = "Reinicia"
    botoReinicia.style.border = "1px solid black"
    botoReinicia.addEventListener("click", function(){

    })

    //IMATGES
    const imatgeDau1 = document.createElement("img")
    imatgeDau1.id = "dau1"
    const imatgeDau2 = document.createElement("img")
    imatgeDau2.id = "dau2"

    //TEXTOS
    const missatgeJoc = document.createElement("h2")
    missatgeJoc.id = "missatge"

    const textSuma = document.createElement("p")
    textSuma.innerText = "Suma: - "

    const textResultat = document.createElement("p")
    textResultat.innerText = "Resultat: 0"

    const textError = document.createElement("p")
    textError.innerText = "Error: "

    const valorError = document.createElement("span")
    pintarErrors(valorError, joc)
    textError.appendChild(valorError)

    const textMarcador = document.createElement("p")
    textMarcador.innerText = "Marcador: 0"

    //AFEGIM AL DOM
    document.querySelector("#app").appendChild(titol)
    document.querySelector("#app").appendChild(missatgeJoc)
    document.querySelector("#app").appendChild(selectOpcioJugador)
    document.querySelector("#app").appendChild(botoTirar)
    document.querySelector("#app").appendChild(botoReinicia)
    document.querySelector("#app").appendChild(imatgeDau1)
    document.querySelector("#app").appendChild(imatgeDau2)
    document.querySelector("#app").appendChild(textSuma)
    document.querySelector("#app").appendChild(textResultat)
    document.querySelector("#app").appendChild(textError)
    document.querySelector("#app").appendChild(textMarcador)
}

function pintarErrors(valorError, joc){
    valorError.innerText = joc.error
}

function pintarSuma(textSuma, joc){
    textSuma.innerText = "Suma: " + joc.suma
}

function pintarResultat(textResultat, haGuanyat){
    textResultat.innerText = "Resultat: " + (haGuanyat ? "Guanyes" : "Perds")
}

function pintarMarcador(textMarcador, joc){
    textMarcador.innerText = "Marcador: " + joc.puntuacio
}

function pintarDau(dau, valor) {
    const idDau = "#dau" + dau
    const dauElement = document.querySelector(idDau)   // sin comillas: es la variable
    dauElement.src = `../practica/assets/img/dau${valor}.svg`
}