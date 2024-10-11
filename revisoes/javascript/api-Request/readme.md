## Requisições HTTP Assíncronas

Existem diversas maneiras de criar requisições HTTP, no entanto, vamos ver somente as 4 mais utilizadas.

1. XMLHttpRequest (XHR) - A mais tradicional
2. Fetch API - A mais utilizada
3. Axios - Biblioteca externa
4. jQuery.ajax - Primeira solução adotada para o XHR


### XMLHttpRequest (XHR)

Para realizar uma requisição com XHR, precisamos __instanciar o objeto XMLHttpRequest__ (nativo dos navegadores). Através dele, conseguimos acesso aos seus métodos, onde utilizaremos para configurar e enviar requisições.

```javascript
var xhr = new XMLHttpRequest();
```
<br>
Após instanciar, temos acessos aos seus métodos e atributos. Abaixo temos os mais utilizados, no entanto, existem muito mais.


##### Métodos:
- `open()` para iniciar a requisição.
- `send()` para enviá-la.

##### Atributos:
- readyState
  - Descreve o estado atual da requisição. Pode ter os valores:
    - 0 (UNSENT)
    - 1 (OPENED)
    - 2 (HEADERS_RECEIVED)
    - 3 (LOADING)
    - 4 (DONE)
- status
  - O código de status HTTP da resposta recebida. Exemplos incluem 200 (OK), 404 (Not Found), 500 (Internal Server Error), etc.
- responseText
  - Contém a resposta da requisição como uma string ou json.


##### Estrutura Requisição
Abaixo temos um exemplo direto de uma requisição get. Nesse caso, não estamos capturando os dados da api, somente realizando o envio da requisição.

```javascript
function ajax() {
    var xhr = new XMLHttpRequest(); // Instanciação objeto XHR
    xhr.open('GET', 'https://reqres.in/api/products/', true); // Inicio req
    xhr.onload = function () {
        // Função para realizar algo com a resposta da requisição
    };
    xhr.send(); // Envio req
}
```
<br>

Para tratar e visualizar os dados, temos que criar outra função. Essa função ela __deve__ estar antes do envio da req. Pelo fato do Ajax ser assíncrono, seu gatilho (onload) já deve estar acionado esperando o envio e retorno da requisição.

```javascript
xhr.onload = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            console.log(JSON.parse(xhr.responseText)); // Ação realizada com a resposta json da requisição Get
        } else {
            console.error(`Erro: ${xhr.status}`);
        }
};
```
<br>

Essa função, normalmente é inicializada, verificando os principais atributos da requisição.

- `xhr.readyState == 4` se a req foi finalizada (enviada).
- `xhr.status == 200` se o status de retorno do HTTP foi bem-sucedido.

Caso não ocorra nenhum erro, alguma ação é realizada. No caso do exemplo, foi pego a resposta em JSON, convertido em objeto e exibido no console.