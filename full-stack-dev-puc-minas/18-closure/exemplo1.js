function criaContador() {
    let n = 0;
    return function() {
        console.log(n++);
    }
}

let contador1 = criaContador();

contador1();
contador1();
contador1();