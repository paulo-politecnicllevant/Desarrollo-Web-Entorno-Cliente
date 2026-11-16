function peticion(min, max) {
    const encabezado = new Headers({
        "Content-Type": "application/json",
        "x-api-key": "live_jYEjT54ZfDk3SNYHESuuyKYV2KhxlD4VBwU6obIa94I7x0tuPjZxjHSyTgDmVNF2"
    });

    const options = {
        method: 'GET',
        headers: encabezado
    }

    const promesa = "http://SERVER/exercicis/other/color?min=" + min + "&max=" + max

    promesa.then(function (respuesta) {
        return respuesta.json();
    })
}