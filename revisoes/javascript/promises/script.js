const minhaPromise = new Promise((resolve, reject) => {
    const sucesso = true;

    if (sucesso) {
        resolve('Operação concluída com sucesso!');
    } else {
        reject('A operação falhou.');
    }
});

// Consumindo a Promise
minhaPromise
    .then((resultado) => {
        console.log(resultado);
    })
    .catch((erro) => {
        console.error(erro);
    });


