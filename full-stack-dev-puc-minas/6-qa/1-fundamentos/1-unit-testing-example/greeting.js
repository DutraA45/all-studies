const greet = (name) => {

    if (name.length === 0) {
        throw new Error("Argumento nome não pode ser vazio");
        
    }

    return `Olá ${name}, seja bem vindo ao curso de Desenvolvimento Web`
}

module.exports = greet