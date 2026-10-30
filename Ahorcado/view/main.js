function init(){
    const lletres = initLletres();
    const paraula = initParaula(lletres);
    const penjat = initPenjat(paraula, lletres)
    pintarPenjat(penjat)

    console.log(lletres, paraula, penjat);
}

init()