//Único lugar en el que puedo usar document.

function pintarMa(ma){
    const contenidor = document.getElementById("app");

    const cartes = document.createElement("div");
    contenidor.appendChild(cartes);

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

    //console.log("Numero de la imatge: ", nom);
    return nom;
}

function pintarBotons(jugarFn){
    const button = document.createElement("button");
    button.innerHTML = "Jugar"

    const tancarFinestra = document.createElement("button")
    tancarFinestra.innerHTML = "Tancar la finestra del joc";

    const tancarPrograma = document.createElement("button")
    tancarPrograma.innerHTML = "Tancar tot el programa"

    /*button.addEventListener("click", function(){
        console.log("Playing")
        comprovarMa(ma)
    })*/

    button.addEventListener("click", function(){
        const trampes = prompt("Vols fer trampes?")

        tancarFinestra.addEventListener("click", function(){
            finestra.close();
        })

        tancarPrograma.addEventListener("click", function(){
            window.close();
        })

        if(trampes === "SI"){
            alert("L'usuari està fent trampes")
            pintarResultat(true, false); /*Pongo que el isBOM es falso para que me salga el
                                                           recuadro grande que dice que he ganado(es más visual),
                                                           si pongo false, me sale un popup diciendo que he ganado*/
        }else if(trampes !== "SI"){
            alert("L'usuari NO està fent trampes")
            jugarFn();
        }

        const finestra = window.open("solucio.html", "_blank", "width=800,height=300")
    })
    //button.addEventListener("click", jugarFn)

    document.querySelector("#app").appendChild(button);
    document.querySelector("#app").appendChild(tancarFinestra);
    document.querySelector("#app").appendChild(tancarPrograma);
}

function pintarResultat(isGuanyador, isBOM){
    if(isBOM){
        if(isGuanyador){
            alert("Has guanyat")
        }else{
            alert("Has perdut")
        }
    }else{
        const missatge = document.createElement("p");
        missatge.innerText = (isGuanyador)?"Has guanyat":"Has perdut"
        missatge.style.color = "red"
        missatge.style.fontSize = "50px"

        const finestra = document.createElement("div")
        finestra.style.backgroundColor = "gray"
        finestra.style.width = "400px"
        finestra.style.height = "300px"
        finestra.style.borderColor = "blue"
        finestra.style.position = "relative"
        finestra.appendChild(missatge);

        document.querySelector("#app").appendChild(finestra);

        const botoTancar = document.createElement("div")
        botoTancar.innerText = "X"
        botoTancar.style.backgroundColor = "red"
        botoTancar.style.fontSize = "50px"
        botoTancar.style.width = "50px"
        botoTancar.style.height = "50px"
        botoTancar.style.position = "absolute"
        botoTancar.style.top = "0px"
        botoTancar.style.right = "0px"
        botoTancar.addEventListener("click", function(){
            console.log("Click a tancar finestra")
            finestra.style.display = "none"
            location.reload();
        })

        finestra.appendChild(botoTancar);
    }
}