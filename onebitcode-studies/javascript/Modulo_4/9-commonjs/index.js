// CommonJS não funciona nos navegadores, mas é a forma padrão no NodeJS
// Módulo de importação commonjs
const r = require("./render");
const store = require("./store");

console.log("Aplicação iniciada.")
r()
store()
console.log("Aplicação finalizada.")