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

### Array Bidimensional

##### Array dentro de array
~~~javascript
// Arrays podem receber qualquer tipo da dado, inclusive outros arrays
const arr = [
  "1º Nível",
  ["2º nível", 42, true],
  [
    ["3º nível, 1º item", "Olá, mundo!"],
    ["3º nível, 2º item", "Oi, mundo!"],
  ],
  []
]
~~~

##### Arrays podem ter várias “dimensões”
~~~javascript
Arrays podem ter várias “dimensões”
// Cada par de colchetes referencia um nível mais interno do array
console.log(arr[0])       // Saída: '1º Nível'
console.log(arr[1])       // Saída: [ '2º nível', 42, true ]
console.log(arr[1][0])    // Saída: '2º nível'
console.log(arr[1][1])    // Saída: 42
console.log(arr[2])       // Saída: [ [ '3º nível, 1º item', 'Olá, mundo!' ], [ '3º nível, 2º item', 'Oi, mundo!' ] ]
console.log(arr[2][0])    // Saída: [ '3º nível, 1º item', 'Olá, mundo!' ]
console.log(arr[2][1][1]) // Saída: 'Oi, mundo!'
~~~

##### Matrizes (arrays com duas dimensões)
~~~javascript
// Podemos ver claramente a estrutura de uma matriz em uma tabela
const matriz = [
  ["l1, c1", "l1, c2", "l1, c3", "l1, c4"],
  ["l2, c1", "l2, c2", "l2, c3", "l2, c4"],
  ["l3, c1", "l3, c2", "l3, c3", "l3, c4"],
]
console.table(matriz)
~~~

##### Iterando sobre arrays bidimensionais (ou de qualquer dimensão)
~~~javascript
// Podemos usar vários níveis de laços FOR para iterar facilmente pela matriz
for (let i = 0; i < matriz.length; i++) {
  for (let j = 0; j < matriz[i].length; j++) {
    const elemento = matriz[i][j]
    console.log("Posição: (" + i + ", " + j + ") Valor: " + elemento)
  }
}
~~~

### Objetos

### Funções

### Retorno da Função

##### Uma função sem saída explícita retornará undefined
~~~javascript
// Retorno é a saída da função

// O retorno é usado para armazenarmos a saída da função em uma variável
// Se não explicitarmos qual deve ser a saída da função, sua saída será undefined
function calcularMedia(a, b) {
  const media = (a + b) / 2
}
const resultado = calcularMedia(5, 9)
console.log(resultado)
~~~

##### Como usar o return para a função ter uma saída?
~~~javascript
// Para dizer qual é a saída de uma função usamos o return
function criarProduto(nome, preco) {
  const produto = { nome, preco, estoque: 1 }
  return produto
}
const notebook = criarProduto("Notebook Intel Core i3 8GB", 3000)
console.log(notebook)
~~~

##### Podemos usar o retorno de uma função diretamente como um valor 
~~~javascript
// Também podemos jogar a saída de uma função dentro dos parâmetros de outra
console.log(criarProduto("Smartphone Samsung Galaxy", 1000))
~~~

##### E o retorno pode ser qualquer expressão ou retorno de outra função
~~~javascript
// E o retorno não precisa ser uma variável,
// pode ser o resultado de qualquer expressão
function areaRetangular(base, altura) {
  return base * altura
}
console.log(areaRetangular(3, 5))
// Ou até o retorno de outra função
function areaQuadrada(lado) {
  return areaRetangular(lado, lado)
}
console.log(areaQuadrada(8))
~~~

##### Uma função só pode retornar uma vez
~~~javascript
// Uma função só pode ter uma saída, depois do return nada é executado
// Repare que o VS Code nos avisa que nosso código não será executado
function olaMundo() {
  let texto = "..."
  return texto
  texto = "Olá, mundo!"
  console.log(texto)
}
console.log(olaMundo())
~~~

##### Porém cada ramificação pode ter um retorno diferente
~~~javascript
// No entanto, diferentes ramificações dentro
// da função podem ter diferentes retornos
function maioridade(idade) {
  if (idade >= 18) {
    return "Maior de idade"
  } else {
    return "Menor de idade"
  }
}
console.log(maioridade(20))
console.log(maioridade(13))
~~~

### Escopo

##### O que é
~~~javascript
// Escopo é o contexto onde a variável foi declarada podendo ser
// mais externo, ou mais interno (se estiver dentro de um bloco)

// Variáveis no escopo mais externo podem ser
// usadas dentro de escopos mais internos
let pokemon = "Charmander"

function evoluir() {
  pokemon = "Charmeleon"
}

console.log(pokemon)
evoluir()
console.log(pokemon)

// Variáveis no escopo mais interno não podem ser
// usadas fora dele em escopos mais internos
function criarAnimal() {
  let animal = "Gato"
}

criarAnimal()
console.log(animal) // Gera erro
~~~

##### Escopo com var e let (ou const)
~~~javascript
// Apenas variáveis declaradas com var ficam
// disponíveis em um escopo mais externo
function avaliarNota(nota) {
  if (nota > 60) {
    var aprovado = true
    let situacao = "Aprovado"
  } else {
    var aprovado = false
    let situacao = "Reprovado"
  }

  console.log(nota)
  console.log(aprovado)
  console.log(situacao) // Gera erro
}
avaliarNota(83)
avaliarNota(49)

// Mas mesmo o var não consegue "sair" para fora do escopo da função
function ola() {
  var texto = "Olá, mundo!"
}
console.log(texto) // Gera erro
~~~

##### Inicialização de variáveis com var e let (ou const)
~~~javascript
// Apenas variáveis declaradas com var são carregadas
// sempre no começo do código, acima de todo o resto
console.log(nome)
console.log(sobrenome)
var nome = "Isaac"
let sobrenome = "Pontes"
console.log(nome)
console.log(sobrenome)
~~~