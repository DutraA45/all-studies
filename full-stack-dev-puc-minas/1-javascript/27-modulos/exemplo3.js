import { contador, conta } from './contador.js';

for(let i = 0; i < 5; i++) console.log(conta());

contador.valor = 0;
console.log(conta());