function Pessoa(n) {
    this.nome = n;
    this.fn = function () {
        console.log(this);
    };
};

let pessoa = new Pessoa('Marcos');

pessoa.fn();