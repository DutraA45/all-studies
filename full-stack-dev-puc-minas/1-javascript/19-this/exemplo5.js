class Pessoa {
    constructor(n) {
    this.nome = n;
    }

    fn(n) {
        let self = this;
        setTimeout(function() {
            self.nome = n;
            console.log(self);
        }, 1000)
    };
};

let pessoa = new Pessoa('Marcos');

pessoa.fn('Pedro');