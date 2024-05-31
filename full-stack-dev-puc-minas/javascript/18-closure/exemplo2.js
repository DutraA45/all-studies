
function digaOla (idioma) {
    return function (nome) {
        switch (idioma) {
            case 'en': console.log(`Hello ${nome}`); break;
            case 'es': console.log(`Hola ${nome}`); break;
            default: console.log(`Olá ${nome}`);
        };
    };
};

let ola = digaOla ('en');
ola ('José');