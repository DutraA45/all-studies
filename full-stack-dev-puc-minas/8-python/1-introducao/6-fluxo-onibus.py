# Em um ônibus embarcam e desembarcam pessoas em paradas determinadas.
# Escreva uma função que receba uma lista de pares inteiros e retorne a quantidade
# de pessoas ainda no ônibus após a última parada. Nesse contexto, os elementos de
# cada par dessa lista representam o número de pessoas que entram no ônibus (o
# primeiro item) e o número de pessoas saem do ônibus (o segundo item) em uma
# parada de ônibus.
# Embora seja o último ponto de ônibus, o ônibus não está vazio e algumas pessoas
# ainda estão no ônibus, e provavelmente estão dormindo lá: D

# Casos de testes
# Entrada → Saída
# [[10,0],[3,5],[5,8]] → 5
# [[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]] → 17
# [[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]] → 21
# Lembre-se de que o número de pessoas no ônibus seja sempre >= 0. Portanto, o
# número inteiro de retorno não pode ser negativo.


def total_pessoas_onibus(fluxo):
    total_acumulado = 0  
    
    for i in fluxo:
        total_acumulado += i[0] - i[1] 
    
    return total_acumulado  


resultado = total_pessoas_onibus([[10, 0], [3, 5], [5, 8]])
print(resultado)