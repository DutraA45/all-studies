class Pessoa {
    constructor(n) {
    this.nome = n;
    }

    fn() {
        let self = this;
        let f = function () {
            console.log(self); // Se chamar o this direto, da undefined. Precisa do self
        }
        f();
    };
};

let pessoa = new Pessoa('Marcos');

pessoa.fn();