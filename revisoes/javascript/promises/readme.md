## Promises
### Criação
Por se tratar de uma classe nativa do javascript, para ser utilizada deve ser instanciada na seguinte maneira:

```javascript
const minhaPromise = new Promise((resolve, reject) => {
 // faça algo
});
```
<br>

Essa classe ela possue 3 estados:
- Pendente (Inicial)
- Resolvida
- Rejeitada

Para realizar a alteração desses estados, é utilizado funções nativas do javascript.
- resolve() - Quando acionada, altera o estado para resolvido.
- rejected() - Quando acionada, altera o estado para rejeitado.

Exemplo da utilização dessas funções:
```javascript
const minhaPromise = new Promise((resolve, reject) => {
    const teste = true;

    if (teste) {
        resolve('Estado da promise alterado para Resolvido');
    } else {
        reject('Estado da promise alterado para Rejeitado');
    }
});
```
<br>

### Utilização
Após a criação do objeto promise, é possivel chamar ele em outros locais e utilizar seus métodos.
- .then() - É executado quando o estado da promise se torna "Resolvida" e recebe o retorno da função resolve(). Pode adotar um segundo parâmetro para tratar de erros, mas não é comum.
- .catch() - É executado quando o estado da promise se torna "Rejeitada" e recebe o retorno da função rejected().
- .finally() - É executado sempre após o retorno do estado.

```javascript
minhaPromise
    .then((resultado) => {
        console.log(resultado);
    })
    .catch((erro) => {
        console.error(erro);
    });
```
<br>

### Encadeamento de promises
A partir do momento em que o return da função que está sendo executada dentro do then() de alguma promise retorna algum valor ou mesmo outra promise, é possivel criar um encadeamento de métodos.

```javascript
// Encadeamento
somar(2, 3) 
    .then((resultadoSoma) => {
        console.log('Resultado da soma:', resultadoSoma); // 5
        return multiplicar(resultadoSoma, 4); // Retorna a Promise da multiplicação
    })
    .then((resultadoMultiplicacao) => {
        console.log('Resultado da multiplicação:', resultadoMultiplicacao); // 20
    })
    .catch((erro) => {
        console.error('Ocorreu um erro:', erro);
    });
```