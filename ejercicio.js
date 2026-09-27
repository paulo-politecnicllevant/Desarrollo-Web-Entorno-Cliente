const familiaGalmes = ["pare", "mare", "fill", "filla"]
const familiaDuran = ["pare", "mare", "fill", "filla"]
const familiaSastre = ["pare", "mare", "fill", "fillaGran", "fillaPetita"]

const tasquesGalmes = ["posarRentadora", "ferCuinaNeta", "ferBanyNet"]
const tasquesDuran = ["planxar", "ferBanyNet"]
const tasquesSastre = ["posarRentadora", "ferCuinaNeta", "netetjarCasa", "planxar", "ferBanyNet"]

function repartirTasques(familia, tasques, setmanes){
    for (let i = 0; i < setmanes; i++){
        console.log("Setmana " + (i + 1) + ": ")

        for (let j = 0; j < familia.length; j++){
            const tascaSeleccionada = [(i + j) % tasques.length];
            const membreSeleccioant = familia[j]

            console.log(membreSeleccioant + " -> ", tasques[tascaSeleccionada])
        }
    }
}

console.log("TASQUES ANUALS")
repartirTasques(familiaGalmes, tasquesGalmes, 52)

console.log("TASQUES MENSUALS")
repartirTasques(familiaDuran, tasquesDuran, 4)

console.log("TASQUES TRIMESTRALS")
repartirTasques(familiaSastre, tasquesSastre, 12)