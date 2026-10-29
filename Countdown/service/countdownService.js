function initCountdown(segundos) {
    return new Countdown(segundos);
}

//Función para validar si el valor introducido es un número
function validarSegundos(valor) {
    if (valor.trim() === "") {
        return false;
    }

    const segundos = Number(valor);

    if (Number.isInteger(segundos) && segundos > 0) {
        return true;
    } else {
        return false;
    }
}
