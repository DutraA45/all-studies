// Forma Literal de objetos
// O protótipo do objeto nesse caso é um objeto

let forma = {
    x: 10,
    y: 15,
};

let retangulo = Object.create(forma)
retangulo.largura = 100;
retangulo.altura = 50;


retangulo.__proto__ = forma;

forma.cor = 'Azul';

console.log(forma);
console.log(retangulo);
console.log(retangulo.cor);