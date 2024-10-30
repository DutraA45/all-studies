function criaFuncoes() {
    let funcoes = [];
    for (let i= 0; i < 3; i++) {
        //let j = i;
        funcoes.push(function () {
                console.log(i)
            });
    }
    return funcoes;
}

let fn = criaFuncoes();
fn[0] ();
fn[1] ();
fn[2] ();