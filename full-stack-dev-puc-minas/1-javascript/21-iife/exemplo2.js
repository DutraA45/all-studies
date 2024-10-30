let $ = (function () {
    let contadores = [];

    function Contador(i) {
        if (contadores[i] === undefined)
            contadores[i] = 0;
        this.incrementa = function () {
            contadores[i]++;
            return this;
        };
        this.decrementa = function () {
            contadores[i]--;
            return this;
        };
        this.valor = function () {
            return contadores[i];
        };
    }

    return function (i) {
        return new Contador(i);
    };
})();

// Maneira 2 - Precisa que seja adicionada o 'return this' dentro de cada metodo;
console.log(1, $(3).incrementa().incrementa().incrementa().incrementa().valor());



// Maneira 1
// let c = $(3);
// console.log(1, c.valor());
// c.incrementa();
// console.log(1, c.valor());
// c.incrementa();
// console.log(1, c.valor());
// c.incrementa();
// console.log(1, c.valor());
// c.incrementa();
// console.log(1, c.valor());

// let c2 = $(0);
// console.log(2, c2.valor());