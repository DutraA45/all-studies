/* A declaração da função utilizando a criação por seta faz com que o this referencie o objeto global, no caso o window */

let pessoa = {
    nome: 'Marcos',
    fn: function () {
        console.log(this);
    },
};

pessoa.fn();