function initSolucio() {
    const contenidor = document.getElementById("app");

    const button = document.createElement("button");
    button.innerHTML = "Refrescar la pàgina";

    button.addEventListener("click", function() {
        location.reload();
    });

    contenidor.appendChild(button);

    const baralla = initBaralla();
    const ma = mesclarIRepartirBaralla(baralla);

    pintarMa(ma);

    const resultat = document.createElement("p");

    if (comprovarMa(ma)) {
        resultat.innerText = "Has guanyat";
    } else {
        resultat.innerText = "Has perdut";
    }
    contenidor.appendChild(resultat);
}

initSolucio();
