console.log('Main init')

function init(){
    const baralla = initBaralla()
    //console.log(baralla)

    const ma = mesclarIRepartirBaralla(baralla)
    //console.log(baralla, ma)

    pintarMa(ma)
    pintarBotoPlay(function(){
        const isGuanyador = comprovarMa(ma)
        console.log("ha guanyat", isGuanyador)
        //TODO: pintar guanyador y comprovar ma(si hay parella)
        //pintar BOM(alert) i DOM(finestra enmig que hem de poder tancar)
        const isBOM = false;
        pintarResultat(isGuanyador, isBOM)
    })
}

init();