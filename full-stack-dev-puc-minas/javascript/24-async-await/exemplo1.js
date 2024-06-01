let numero = 5;
let fn = fnMetade(numero);

fn.then(
    (resp) => console.log(`A metade de ${numero} é ${resp}`))
    .catch((erro) => console.log(erro.message));

async function fnMetade(n) {
    if (n % 2 == 0) return n / 2;
    else
        throw new Error('O número não é par');
}