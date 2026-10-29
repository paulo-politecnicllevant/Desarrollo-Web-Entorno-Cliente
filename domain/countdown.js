function Countdown(segundos) {
    let segundosIniciales = segundos;
    let fechaInicial = null;

    this.start = function () {
        fechaInicial = Date.now();
    }

    this.elapsed = function () {
        if (fechaInicial === null) {
            return 0;
        }

        return Math.floor((Date.now() - fechaInicial) / 1000);
    }

    this.remaining = function () {
        return Math.max(0, segundosIniciales - this.elapsed());
    }

    this.finished = function () {
        return this.remaining() === 0;
    }

    this.reset = function (segundos) {
        segundosIniciales = segundos;
        fechaInicial = null;
    }
}
