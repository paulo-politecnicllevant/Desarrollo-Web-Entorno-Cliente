function pintarPenjat(penjat) {
    //PINTAR PENJAT
    //Pintar imatge
    pintarImatge()
    //Pintar paraula
    pintarParaula(penjat.paraula)
    //Pintar lletres
    pintarLletres(penjat);

}

function pintarImatge(){
    //Pintar imatge
    const imatge = document.createElement("img")
    imatge.src = 'assets/1.PNG';
    document.querySelector('#app').appendChild(imatge);
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
    document.querySelector('#app').appendChild(paraulaWrap)
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

        lletresWrap.appendChild(button)
    }
    document.querySelector('#app').appendChild(lletresWrap)
}