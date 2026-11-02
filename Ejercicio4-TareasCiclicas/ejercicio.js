const familiaGalmes = ["pare", "mare", "fill", "filla"]
const familiaDuran = ["pare", "mare", "fill", "filla"]
const familiaSastre = ["pare", "mare", "fill", "fillaGran", "fillaPetita"]

const tasquesGalmes = ["posarRentadora", "ferCuinaNeta", "ferBanyNet"]
const tasquesDuran = ["planxar", "ferBanyNet"]
const tasquesSastre = ["posarRentadora", "ferCuinaNeta", "netetjarCasa", "planxar", "ferBanyNet"]

function repartirTasques(familia, tasques, setmanes){
    for (let i = 0; i < setmanes; i++){
        console.log("Setmana " + (i + 1) + ": ")

        for (let j = 0; j < tasques.length; j++){
            const tascaSeleccionada = tasques[j]
            const membreSeleccioant = familia[(i + j) % familia.length]

            console.log(membreSeleccioant + " -> ", tascaSeleccionada)
        }
    }
}

console.log("TASQUES ANUALS")
repartirTasques(familiaGalmes, tasquesGalmes, 52)

console.log("TASQUES MENSUALS")
repartirTasques(familiaDuran, tasquesDuran, 4)

console.log("TASQUES TRIMESTRALS")
repartirTasques(familiaSastre, tasquesSastre, 12)

//FROMA ALTERNATIVA DE HACERLO
function Familia(membres, tasques, numSetmanes){
    this.membres = membres
    this.tasques = tasques
    this.numSetmanes = numSetmanes
}

const galmes = new Familia(["pare", "mare", "fill", "filla"],
    ["posarRentadora", "ferCuinaNeta", "ferBanyNet"],
    52)

const duran = new Familia((["pare", "mare", "fill", "filla"]),
    ["planxar", "ferBanyNet"],
    4)

const sastre = new Familia(["pare", "mare", "fill", "fillaGran", "fillaPetita"],
    ["posarRentadora", "ferCuinaNeta", "netetjarCasa", "planxar", "ferBanyNet"],
    12)

function planificador(familia){
    const membres = familia.membres
    const tasques = familia.tasques
    const numSetmanes = familia.numSetmanes

    console.log("Familia", membres, "Tasques", tasques, "Num Setmanes", numSetmanes)

    for(let numSetmana = 0; numSetmana < numSetmanes; numSetmana++){
        let text = ''
        for(let i = 0; i < tasques.length; i++){
            text+= "| " + membres[i] + ": " + tasques[i] + " |"
        }
        //membres.push(membres.shift())
        const primerMembre = membres[0]
        //Eliminar el primer membre
        membres.shift()
        //Afegir primer membre al final
        membres.push(primerMembre)

        console.log(`Setmana ${numSetmana + 1}:` + text)
    }
}

planificador(galmes)
planificador(duran)
planificador(sastre)