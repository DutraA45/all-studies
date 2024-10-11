function requestApiData() {
    fetch('https://reqres.in/api/products/')
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erro: ${response.status}`);
            }
            return response.json(); // Converte a resposta para JSON
        })
        .then(data => {
            console.log(data); // Mostra os dados no console
        })
        .catch(error => {
            console.error(error); // Lida com erros
        });
}