// Exemplo 1
let numeros = [1, 2, 3, 4];
let maisNumerosSD = [numeros, 5, 6];
let maisNumerosCD = [...numeros, 5, 6];

console.log(maisNumerosSD);
console.log(maisNumerosCD);

// Exemplo 2
let obj1 = {nome: 'José Couves', idade: 25};
let obj2 = obj1;
let clone1 = {...obj1}

obj1.nome = 'Maria Souza';
console.log(obj2.nome);
console.log(clone1.nome);
console.log(obj1.nome);

// Exemplo 3
let mat = {matricula: 1234, curso: 'Web'};
let aluno = {...obj1, ...mat};
console.log(aluno);

let funcionario = {...obj1, salario: 3500};
console.log(funcionario);

// Exemplo 4
function soma() {
    console.log(arguments);
    let valores = [...arguments];
    console.log(valores);
    return valores.reduce(
        function(total, i) {
            return total += i;
        }
    )
};

console.log(soma (1, 2, 3, 4));

// Exemplo 5
let nomeCompleto = 'José Couves';
let pessoa = {};
[pessoa.prenome, pessoa.sobrenome] = nomeCompleto.split(' ');

console.log(pessoa);


// Exemplo 6
let pessoa1 = {
    nome: 'José Couves',
    idade: 25,
};

for(let [chave, valor] of Object.entries(pessoa1))
    console.log(`${chave} = ${valor}`);

// Exemplo 7
let numeros1 = [1, 2, 3, 4, 5];
let [primeiro, segundo, ...resto] = numeros1;

console.log(resto);

// Exemplo 8
let pessoa2 = {
    nome: 'José Couves',
    idade: 25,
    salario: 3500,
};

function ola ({nome}) {
    console.log(`Olá ${nome}`);
}

ola(pessoa2);

// Exemplo 9

let pessoa3 = {
    nomeCompleto: 'José Couves',
    idade: 25,
    salario: 3500,
};

let {nomeCompleto:nome, ...resto3} = pessoa3;
console.log(nome);
console.log(resto3);