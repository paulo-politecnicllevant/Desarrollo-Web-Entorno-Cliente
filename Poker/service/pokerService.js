function initBaralla(){
    const nombres = ['AS', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
    const pals = ["COR", "PICA", "DIAMANT", "TREVOL"]

    const baralla = []

    for (let pal of pals) {
        for (let nombre of nombres) {
            baralla.push(new Carta(nombre, pal))
        }
    }
    return baralla;
}

function mesclarIRepartirBaralla(baralla){
    baralla.sort(function(){
        return 0.5 - Math.random();
    })

    const ma = []
    for (let i = 0; i < 5; i++) {
        ma.push(baralla[i])
    }

    return ma;
}

function comprovarMa(ma){
    console.log("Comprovant la mà...")
}