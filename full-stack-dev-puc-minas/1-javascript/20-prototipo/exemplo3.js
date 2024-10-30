// Herança
// Realizando com base na notação de objetos

function Forma(x, y) {
    this.x = x;
    this.y = y;
}

Forma.prototype.move = function(dx, dy) {
    this.x += dx;
    this.y += dy;
};
function Cor(n) {
    this.cor = n;
}
function Retangulo(x, y, l, a, n) {
    Forma.call(this, l, a);
    Cor.call(this, n);
    this.l = l;
    this.a = a;
};

Retangulo.prototype = Object.create(Forma.prototype);
Retangulo.prototype.constructor = Retangulo;

let r1 = new Retangulo(10, 15, 100, 50, 'Azul');

// r1.move(15, 15);

console.log(r1);