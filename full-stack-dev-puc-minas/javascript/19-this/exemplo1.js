
// Içamento (Hoisting)

fn(); // Devido ao Hoisting, a chamada da função funciona aqui

let a = 1;
const b = 2;
var c = 3;
this.d = 4;

function fn() {
    console.log(this);
}

console.log(this);
