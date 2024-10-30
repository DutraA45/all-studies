// Herança
// Realizando com base na notação de classes

class Forma {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    };
    move(dx, dy) {
        this.x += dx;
        this.y += dy;
    };
};

class Retangulo extends Forma {
    constructor(x, y, l, a) {
        super(x, y);
        this.l = l;
        this.a = a;
    };
};

let r1 = new Retangulo(10, 15, 100, 50);

// r1.move(15, 15);

console.log(r1);