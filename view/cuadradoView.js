function pintarBoton(){
    const button = document.createElement("button")
    button.innerHTML = "Colorízame"
    button.addEventListener("click", pintarCuadrado())

    document.getElementById("app").appendChild(button)
}

function pintarCuadrado(min, max){

}