// Existem diferenças, mas o Fetch substitui o AJAX

function carga() {
    fetch('https://reqres.in/api/users')
        .then(function (resp) {
            console.log(resp);
            if (resp.ok) {
                return resp.json();
            }
        })
        .then(function (obj) {
            console.log(obj);
        })
        .catch((erro) => console.log(erro));
};

carga();