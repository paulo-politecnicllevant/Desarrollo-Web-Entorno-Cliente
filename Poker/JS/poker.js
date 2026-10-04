function jugar() {
    const valors = [2, 3, 4, 5, 6, 7, 8, 9, 10, "ace", "jack", "queen", "king"]
    const pals = ["clubs", "diamonds", "hearts", "spades"]
    let cartes = [];

    for (let pal of pals) {
        for (let valor of valors) {
            cartes.push(valor + "_of_" + pal)
        }
    }

    const numCartesPerRepartit = 5;
    const cartesSeleccionades = [];

    for (let i = 0; i < numCartesPerRepartit; i++) {
        let posicio = Math.floor(Math.random() * cartes.length);

        let carta = cartes.splice(posicio, 1)[0];

        cartesSeleccionades.push(carta);
    }

    console.log(cartesSeleccionades);

    let divCartes = document.getElementById("cartes");

    divCartes.innerHTML = "";

    for (let carta of cartesSeleccionades) {
        divCartes.innerHTML += `<img src="../cards/${carta}.png">`;
    }
}