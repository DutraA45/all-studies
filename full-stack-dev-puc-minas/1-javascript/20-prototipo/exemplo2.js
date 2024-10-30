// O protótipo do objeto nesse caso é uma função construtora
function Forma(x, y) {
    this.x = x;
    this.y = y;
}

let f1 = new Forma(10, 15);

Forma.prototype.move = function(dx, dy) {
    this.x += dx;
    this.y += dy;
};
Forma.prototype.cor = 'Azul';

f1.move(15, 15);
console.log(f1);