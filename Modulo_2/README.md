# Modulo 2

### Estruturas de dados

São um modo particular de armazenar e organizar dados de modo que possam ser usados eficientemente, facilitando sua busca e modificação.

- Lista ligada
- Array
- Fila
- Pilha
- Árvore

### Array (Vetores)

- É uma estrutura do javascript para se trabalhar com todo tipo de lista
- Seus elementos são identificados por um índice inteiro começando pelo 0
- Pode armazenar qualquer tipo de dado e ter qualquer tamanho
- Pode ser criado e utilizado através de colchetes
- Possuem funções para vários casos de uso

### Funções

~~~javascript
const arr = ["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli"]
~~~

##### Adicionar
~~~javascript
// push: Adiciona um elemento no final do array e devolve o novo tamanho do array
let tamanho = arr.push("Boromir")
console.log(arr)
console.log(tamanho)

// unshift: Adiciona um elemento no começo do array e devolve o novo tamanho do array
tamanho = arr.unshift("Boromir")
console.log(arr)
console.log(tamanho)
~~~


##### Remover
~~~javascript
// pop: Remove um elemento no final do array e devolve o elemento removido
let elementoRemovido = arr.pop("Boromir")
console.log(arr)
console.log(elementoRemovido)

// shift: Remove um elemento no começo do array e devolve o elemento removido
elementoRemovido = arr.shift("Boromir")
console.log(arr)
console.log(elementoRemovido)
~~~

##### Pesquisar
~~~javascript
// includes: Verifica se um certo elemento está presente no array 
const inclui = arr.includes("Gandalf")
console.log(inclui)

// indexOf: Encontra o índice que possui o elemento indicado, ou -1 caso ele não exista no array
const indice = arr.indexOf("Gandalf")
console.log(indice)
~~~

##### Cortar e concatenar
~~~javascript
// slice: Copia uma parte do array e devolve a parte copiada sem alterar o array original
const hobbits = arr.slice(0, 4)
// Também pode ser usado com números negativos referenciar o final do array
const outros = arr.slice(-4)
console.log(arr)
console.log(hobbits)
console.log(outros)

// concat: Junta dois ou mais arrays e/ou itens e devolve o resultado (sem alterar nenhum dos arrays)
const sociedade = hobbits.concat(outros, "Boromir")
console.log(sociedade)
console.log(hobbits)
console.log(outros)
~~~

##### Substituir
~~~javascript
// splice: Permite remover elementos em qualquer posição do array e substituir por novos
const elementosRemovidos = sociedade.splice(indice, 1, "Gandalf, o Cinzento")
console.log(elementosRemovidos)
console.log(sociedade)
~~~

##### Iterar
~~~javascript
// Usando o for para percorrer cada elemento do array
for (let indice = 0; indice < sociedade.length; indice++) {
  const elemento = sociedade[indice]
  console.log(elemento + " se encontra na posição " + indice)
}
~~~