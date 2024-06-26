function carga(n) {
    fetch('https://reqres.in/api/users/' + n)
        .then((resp) => resp.json())
        .then((obj) => fetch (obj.data.avatar))
        .then((resp) => resp.blob())
        .then((b) => { imagem.src = URL.createObjectURL(b)})
        .catch((erro) => console.log(erro));
}

output.innerHTML = `
    <p>
        <input id="idUser" type="number" value="1" />
        <button id="btn">Ver avatar</button>
    </p>
    <p>
        <img id="imagem" />
    </p>
`;

btn.onclick = () => carga(idUser.value);