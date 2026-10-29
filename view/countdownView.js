function pintarCountdownInit() {
    let countdown;
    let intervaloCountdown;

    const app = document.querySelector("#app");

    //Crear el numero que indica el tiempo restante
    const div = document.createElement("div");
    div.id = "countdown";
    div.textContent = "0";
    app.appendChild(div);

    //Crear el campo para introducir el tiempo
    const inputSegundos = document.createElement("input");
    app.appendChild(inputSegundos);

    //Crear el mensaje
    const mensaje = document.createElement("p");
    mensaje.id = "mensaje";
    app.appendChild(mensaje);

    //Crear el boton START
    const botonStart = document.createElement("button");
    botonStart.textContent = "START";
    app.appendChild(botonStart);

    //Actualizar el número
    inputSegundos.addEventListener("input", function () {
        clearInterval(intervaloCountdown);
        countdown = null;

        mensaje.textContent = "";

        if (validarSegundos(inputSegundos.value)) {
            div.textContent = Number(inputSegundos.value);
        } else {
            div.textContent = "0";
        }
    });

    //Iniciar la cuenta atrás
    botonStart.addEventListener("click", function () {
        if (inputSegundos.value.trim() === "") {
            mensaje.textContent = "El campo no puede estar vacÍo";
            return;
        }

        if (isNaN(Number(inputSegundos.value))) {
            mensaje.textContent = "El valor no es un nÚmero";
            return;
        }

        clearInterval(intervaloCountdown);

        countdown = initCountdown(Number(inputSegundos.value));
        countdown.start();

        mensaje.textContent = "";

        pintarCountdown(countdown);

        intervaloCountdown = setInterval(function () {
            pintarCountdown(countdown);

            if (countdown.finished()) {
                clearInterval(intervaloCountdown);

                div.textContent = "0";
                mensaje.textContent = "La cuenta atrás ha terminado";

            }
        }, 100);
    });
}

function pintarCountdown(countdown) {
    const div = document.querySelector("#countdown");
    div.textContent = countdown.remaining();
}

function init() {
    pintarCountdownInit();
}

init();
