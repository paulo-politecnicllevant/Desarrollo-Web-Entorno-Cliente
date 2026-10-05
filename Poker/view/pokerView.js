//Único lugar en el que puedo usar document.

function pintarMa(ma){
    const contenidor = document.getElementById("app");

    for (const carta of ma) {
        const imgName = cardMapToImg(carta);

        const imatge = document.createElement("img");
        imatge.src = '../Poker/assets/cards/' + imgName
        imatge.width = 150
        contenidor.appendChild(imatge);
    }
}

function cardMapToImg(carta){
    //Nom de la carta
    let nom = '';
    switch (carta.nombre){
        case 'J' : nom = 'jack';
            break;

        case 'Q' : nom = 'queen';
            break;

        case 'K' : nom = 'king';
            break;

        case 'AS' : nom = 'ace';
            break;

        default: nom += carta.nombre;
    }

    nom += '_of_'

    switch (carta.pal){
        case 'COR' : nom += 'hearts';
            break;

        case 'PICA' : nom += 'spades';
            break;

        case 'DIAMANT' : nom += 'diamonds';
            break;

        case 'TREVOL' : nom += 'clubs';
            break;

        default: nom += 'unknown'
    }

    nom += '.png'

    console.log("Numero de la imatge: ", nom);
    return nom;
}

function pintarBotoPlay(jugarFn){
    const button = document.createElement("button");
    button.innerHTML = "Jugar"

    /*button.addEventListener("click", function(){
        console.log("Playing")
        comprovarMa(ma)
    })*/

    button.addEventListener("click", jugarFn)

    document.querySelector("#app").appendChild(button);
}