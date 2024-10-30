function digaOla(nome) {
    console.log(`Olá ${nome}`);
};

function digaTchau(nome) {
    console.log(`Tchau ${nome}`);
};

let usuario = {
    nome:'Marcos'
};


// export default usuario;
export { usuario as default, digaOla as ola, digaTchau as tchau};