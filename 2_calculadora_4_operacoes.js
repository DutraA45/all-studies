const entrada1 = prompt("Informe o primeiro número:");
const entrada2 = prompt("Informe o segundo número: ");

const x = parseFloat(entrada1);
const y = parseFloat(entrada2);

const soma = x + y;
const subtracao = x - y;
const multiplicacao = x * y;
const divisao = x / y;

alert(
    "A soma é: " + soma + 
    "\nA subtração é: " + subtracao + 
    "\nA multiplicação é: " + multiplicacao + 
    "\nA divisão é: " + divisao
    );