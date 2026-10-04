const valors = [2, 3, 4, 5, 6, 7, 8, 9, 10, "ace", "jack", "queen", "king"]
const pals = ["clubs", "diamonds", "hearts", "spades"]
let cartes = [];

const numCartesPerRepartit = 5;
const cartesSeleccionades = [];

for (let pal of pals){
    for (let valor of valors){
        cartes.push(valor + "_of" + pal + ".png")
    }
}