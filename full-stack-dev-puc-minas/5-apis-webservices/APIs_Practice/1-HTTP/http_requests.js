const url = "https://jsonplaceholder.typicode.com/users";

async function getData() {
    const request = {
        method: "GET",
        headers: {
            // especifica o tipo de dado esperado (geralmente JSON)
            'Content-Type': 'application/json',
            // caso o endpoint exija um token JWT para autenticação
            'Authorization': 'Bearer seu_token_aqui',
            // qualquer outro cabeçalho personalizado que a API possa precisar
            'Custom-Header': 'CustomHeaderValue'
        },
        // Note que não há body aqui, pois GET não permite payload
    }

    try {
        const response = await fetch(url, request);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        // Ação a ser feita, transformar a resposta em objeto e mostrar no console
        const json = await response.json();
        console.log(json);
    } catch (error) {
        console.error(error.message);
    }
}

async function postData() {
    const request = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: 'Estudante',
            email: 'estudante@gmail.com'
        })
    }

    try {
        const response = await fetch(url, request);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        // Ação a ser feita, transformar a resposta em objeto e mostrar no console
        const json = await response.json();
        console.log(json);
    } catch (error) {
        console.error(error.message);
    }

}

async function putData() {
    const request = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: 'Estudante',
            message: 'estudante@gmail.com'
        })
    }

    try {
        const response = await fetch(`${url}/1`, request);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        // Ação a ser feita, transformar a resposta em objeto e mostrar no console
        const json = await response.json();
        console.log(json);
    } catch (error) {
        console.error(error.message);
    }
}

async function deleteData() {
    const request = {
        method: 'DELETE'
    }

    try {
        const response = await fetch(`${url}/1`, request);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        // Ação a ser feita, transformar a resposta em objeto e mostrar no console
        const json = await response.json();
        console.log(json);
    } catch (error) {
        console.error(error.message);
    }
}




// getData()
// postData()
// putData()
// deleteData()


