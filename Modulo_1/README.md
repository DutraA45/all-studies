# Modulo 1 

### Tipos de dados - Primitivos

-  number e bigint
-  string
-  boolean
-  null e undefined
   > null = valor vazio; 
   > undefined = nenhum valor definido


### Tipos de Variáveis

-  var
-  let
-  const

![Diferença de declaracao de variaveis](/img/difference-variable-declarations.png)


### Nomenclatura de Variáveis

- Camel Case
- Snake Case

### Operadores e expressões

- Aritméticos +, -, *, / e %
- Agrupamento ()
- Atribuição =, +=, -=, *=, /= e %=
- Encadeamento
- Incrementar ++ e decrementar --

### Recursos Nativos do Navegador

~~~javascript
let nome = "Dutra"

console.log(nome)
console.error(nome)
console.warn(nome)
//console.alert(nome)
// nome = window.prompt("Insira o seu nome:")
// let confirmacao = window.confirm("Confirma essa ação?")

alert("Olá mundo!")
prompt("Olá")
confirm("Confirma?")
~~~

### Comparação de dados

Retornam um resultado booleano (true ou false)

__Operadores__
- == e ===
- != e !==
- <, <=, >, >=

> __Note:__  
> == compara somente o valor
> === compara o tipo e o valor

### Operadores Lógicos

__E (AND)__

Só é verdadeiro se ambas as partes forem verdadeiras

true && true === true
true && false === false
false && true === false
false && false === false

__Ou (OR)__

Só é falso se ambas as partes forem falsas

true || true === true
true || false === true
false || true === true
false || false === false

__Não (Not)__

Inverte o resultado (de verdadeiro para falso e vice-versa)

! true === false
! false === true

### Estruturas Condicionais

__If e else__

~~~javascript
if (idade > 18) {
    alert("Você é maior de idade");
} else {
    alert("Você é menor de idade");
}
~~~

__Switch__

~~~javascript
const resultado = prompt("Escolha uma alternativa");

const resultadoNumerico = parseFloat(resultado)

switch ("resultadoNumerico") {
    case "2":
        alert("O resultado é 'a'");
        break;
    case "3":
        alert("O resultado é 'b'");
        break;
    case "4":
        alert("O resultado é 'c'");
        break;
    default:
       alert("Finalizando..."); 
       break;
}
~~~

__While__

~~~javascript
let velocidade = 80

while (velocidade > 0) {
    alert("O carro está a " + velocidade + " km/h");
    velocidade -= 20;
    alert("Diminuindo 20 km/h");

    if (velocidade === 40) {
        break;
    }
}

alert("O carro parou.")
~~~

__Do While__

~~~javascript
let velocidade = 0

do {
    alert("A velocidade do veículo é " + velocidade + " km/h")
    velocidade -= 20
} while (velocidade > 0) {

}

alert("Velocidade final: " + velocidade + " km/h")
~~~

__For__

Modelo 1
~~~javascript
for (let indice = 0; indice <= 10; indice++) {
    alert("Índice " + indice);
};
~~~

Modelo 2
~~~javascript
let indice = 0

for (alert("Inicializando o for"); indice <= 10; alert("Finalizando um bloco do for")) {
    alert("Índice " + indice);
}
~~~

Modelo 2
~~~javascript
let nome = "Jefferson Dutra";

for (let i = 0; i < nome.length; i++) {
    console.log(nome[i]);
    break;
    i++;
};
~~~