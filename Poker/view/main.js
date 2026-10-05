console.log('Main init')

function init(){
    const baralla = initBaralla()
    console.log(baralla)

    const ma = mesclarIRepartirBaralla(baralla)
    console.log(baralla, ma)

    pintarBotoPlay(function(){
        comprovarMa(ma)
        //TODO: pintar guanyador y comprovar ma(si hay parella)
    })
    pintarMa(ma)
}

init();