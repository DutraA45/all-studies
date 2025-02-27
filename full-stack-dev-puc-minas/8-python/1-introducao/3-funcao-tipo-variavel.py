# Desafio 3.1

# Escreva uma função em python que retorne o nome do tipo da variável passada
# como parâmetro.

# Casos de testes
# Entradas --> Saída:
# var = 10 --> “int”
# var = 2.5 --> “float”
# var = “True” --> “str”
# var = False --> “bool”

def identifica_TipoVariavel(variavel):
    return print(type(variavel).__name__)

identifica_TipoVariavel(2.5)