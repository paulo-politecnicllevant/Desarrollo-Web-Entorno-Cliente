function initLletres(){
    const abecedari = "abcdefghijklmnopqrstuvwxyz"
    const lletres = []

    for(const lletra of abecedari){
        lletres.push(new Lletra(lletra, 'DESCONEGUT'))
    }
    return lletres;
}

function initParaula(lletres){
    const paraulesDisponibles = [
        "manzana", "computadora", "guitarra", "espejo",
        "montaña", "universo", "elefante", "cuaderno", "tormenta",
        "camino", "silencio", "ventana", "planeta", "brújula",
        "oceano", "mariposa", "castillo", "desierto", "invierno",
        "alegría", "sombra", "fuego", "destino", "aventura",
        "horizonte", "galaxia", "orquesta", "laberinto", "antorcha"
    ];

    //Agafam una paraula aleatoria
    const index = Math.floor(Math.random() * paraulesDisponibles.length)
    const paraulaAleatoria = paraulesDisponibles[index].split("")
    console.log("Palabra aleatoria", paraulaAleatoria)

    //Mapeig amb les lletres
    const resultat = [];
    for(const lletraParaula of paraulaAleatoria){
        for(const lletra of lletres){
            if(lletraParaula === lletra.valor){
                resultat.push(lletra)
            }
        }
    }
    return resultat;
}

function initPenjat(paraula, lletres){
    return new Penjat(paraula, lletres);
}

function jugar(penjat, lletra){
    let paraulaCorrecta = false

    //Compruebo si la palabra seleccionada está en la palabra final
    for(const l of penjat.paraula){
        if(l.valor === lletra.valor){
            paraulaCorrecta = true
        }
    }

    if(paraulaCorrecta){
        lletra.estat = 'ACERT'
    }else{
        lletra.estat = 'ERROR'
        penjat.numErrors++
    }

    //Compruebo si se han adivinado todas las letras de la palabra
    let totesEncertades = true
    for(const l of penjat.paraula){
        if(l.estat !== 'ACERT'){
            totesEncertades = false
        }
    }

    if(penjat.numErrors >= penjat.maxErrors){
        penjat.estat = 'PERDUT'
    }else if(totesEncertades){
        penjat.estat = 'GUANYAT'
    }
}