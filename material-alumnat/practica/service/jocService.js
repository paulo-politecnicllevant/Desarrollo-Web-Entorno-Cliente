const PARELL = "parell"
const SENAR = "senar"

function validarJugada(joc){
    return joc.jugada === PARELL || joc.jugada === SENAR;
}

function setJugada(joc, valor){
    joc.jugada = valor;
}

function addError(joc){
    joc.error++;
}

function tirarDau(){
    return Math.floor(Math.random() * 6) + 1;
}

function comprovarResultat(joc){
    let haEncertat = false

    if(joc.dau1 === joc.dau2){
        haEncertat = joc.jugada === SENAR
    }else if(joc.suma % 2 === 0){
        haEncertat = joc.jugada === PARELL
    }else{
        haEncertat = joc.jugada === SENAR
    }

    if(haEncertat){
        joc.puntuacio++
    }
    return haEncertat
}

function calcularSuma(joc){
    joc.suma = joc.dau1 + joc.dau2
}