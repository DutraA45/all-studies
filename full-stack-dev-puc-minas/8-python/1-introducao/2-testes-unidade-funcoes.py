# Desafio 2

# João adora andar de bicicleta. Ele sabe que é importante se manter hidratado, por
# isso ele bebe 0.5 litro de água por hora de ciclismo. Escreva uma função em Python,
# e o teste de unidade associado, que receba o tempo em horas e retorne a
# quantidade de litros que João beberá, arredondado para o menor valor.

# Exemplos:
# Entradas --> Saída:
# tempo = 3 --> litros = 1
# tempo = 6.7 --> litros = 3
# tempo = 11.8 --> litros = 5

from math import floor

def hidratacao(tempo):
    agua = floor(tempo/2)
    return print("litros = ", agua)

hidratacao(11.8)
