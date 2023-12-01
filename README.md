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