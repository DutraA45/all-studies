async function carga(n) {
    let resp1 = await fetch('https://reqres.in/api/users/' + n);
    let user = await resp1.json();
    let resp2 = await fetch(user.data.avatar);
    let avatar = await resp2.blob();
    console.log(avatar);
    imagem.src = URL.createObjectURL(avatar);
    console.log(imagem.src);
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

btn.onclick = () => {
    carga(idUser.value)
    .then((resp) => console.log(resp))
    .catch((erro) => console.log(erro))
};