// Exemplo 1
let numeros = [1, 2, 3, 4];
let maisNumerosSD = [numeros, 5, 6]; // Sem desestruturação, aninha o array
let maisNumerosCD = [...numeros, 5, 6]; // Desestruturação de array, espalha elementos

console.log(maisNumerosSD);
console.log(maisNumerosCD);

// Exemplo 2
let obj1 = { nome: 'José Couves', idade: 25 };
let obj2 = obj1; // Atribuição de objeto, referência compartilhada
let clone1 = { ...obj1 } // Clone do objeto com desestruturação

obj1.nome = 'Maria Souza';
console.log(obj2.nome); // Mostra a referência compartilhada
console.log(clone1.nome); // Mostra o clone do objeto
console.log(obj1.nome); // Mostra a atualização do objeto original

// Exemplo 3
let mat = { matricula: 1234, curso: 'Web' };
let aluno = { ...obj1, ...mat }; // Combina dois objetos com desestruturação
console.log(aluno);

let funcionario = { ...obj1, salario: 3500 }; // Adiciona nova propriedade com desestruturação
console.log(funcionario);

// Exemplo 4
function soma() {
    console.log(arguments); // Mostra argumentos da função
    let valores = [...arguments]; // Desestrutura argumentos em um array
    console.log(valores);
    return valores.reduce(
        function (total, i) {
            return total += i; // Soma os valores do array
        }
    )
};

console.log(soma(1, 2, 3, 4)); // Chama a função soma com argumentos

// Exemplo 5
let nomeCompleto = 'José Couves';
let pessoa = {};
[pessoa.prenome, pessoa.sobrenome] = nomeCompleto.split(' '); // Desestruturação de string em propriedades de objeto

console.log(pessoa);

// Exemplo 6
let pessoa1 = {
    nome: 'José Couves',
    idade: 25,
};

for (let [chave, valor] of Object.entries(pessoa1)) // Desestruturação de entradas de objeto em chave e valor
    console.log(`${chave} = ${valor}`);

// Exemplo 7
let numeros1 = [1, 2, 3, 4, 5];
let [primeiro, segundo, ...resto] = numeros1; // Desestruturação de array com resto dos elementos

console.log(resto);

// Exemplo 8
let pessoa2 = {
    nome: 'José Couves',
    idade: 25,
    salario: 3500,
};

function ola({ nome }) { // Desestruturação de parâmetro de objeto na função
    console.log(`Olá ${nome}`);
}

ola(pessoa2);

// Exemplo 9

let pessoa3 = {
    nomeCompleto: 'José Couves',
    idade: 25,
    salario: 3500,
};

let { nomeCompleto: nome, ...resto3 } = pessoa3; // Desestruturação de objeto com renomeação e resto
console.log(nome);
console.log(resto3);
