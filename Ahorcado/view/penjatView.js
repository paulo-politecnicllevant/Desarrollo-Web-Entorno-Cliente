function pintarPenjat(penjat) {
    document.body.innerHTML = ''
    //PINTAR PENJAT
    //Pintar imatge
    pintarImatge(penjat)
    //Pintar paraula
    pintarParaula(penjat.paraula)
    //Pintar lletres
    pintarLletres(penjat);
    pintarMissatge(penjat);

}

function pintarImatge(penjat) {
    //Pintar imatge
    const imatge = document.createElement("img")
    imatge.src = 'assets/' + (penjat.numErrors + 1) + '.PNG';
    document.body.appendChild(imatge);
}

function pintarParaula(paraula){
    const paraulaWrap = document.createElement('div')

    for(const lletra of paraula){
        const l = document.createElement('span');
        if(lletra.estat === 'DESCONEGUT' || lletra.estat === 'ERROR'){
            l.innerHTML = ' _ '
        }else{
            l.innerHTML = ` ${lletra.valor} `
        }
        paraulaWrap.appendChild(l)
    }
    document.body.appendChild(paraulaWrap)
}

function pintarLletres(penjat){
    const lletresWrap = document.createElement('div')

    for(const lletra of penjat.lletres){
        const button = document.createElement("button")
        button.innerText = lletra.valor
        button.style.margin = "2px";
        button.style.border = "1px solid black";

        if(lletra.estat === 'DESCONEGUT'){
            button.style.backgroundColor = 'blue'
            button.style.color = 'white'

        }else if(lletra.estat === 'ACERT'){
            button.style.backgroundColor = 'green'
        }else{
            button.style.backgroundColor = 'red'
        }
        button.addEventListener('click', function(){
            jugar(lletra)
            pintarParaula(penjat.paraula)
        })

        //Si la letra ha sido seleccionada se desactiva
        if(lletra.estat !== 'DESCONEGUT' || penjat.estat !== 'JUGANT'){
            button.disabled = true
        }

        button.addEventListener('click', function(){
            jugar(penjat, lletra)
            pintarPenjat(penjat)
        })

        lletresWrap.appendChild(button)
    }
    document.body.appendChild(lletresWrap)
}

function pintarMissatge(penjat){
    if(penjat.estat === 'GUANYAT'){
        const missatge = document.createElement('h1')
        missatge.innerText = 'Has guanyat'
        document.body.appendChild(missatge)
    }else if(penjat.estat === 'PERDUT'){
        const missatge = document.createElement('h1')
        missatge.innerText = 'Has perdut'
        document.body.appendChild(missatge)
    }
}