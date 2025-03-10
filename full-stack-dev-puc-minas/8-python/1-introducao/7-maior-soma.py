# Desafio 11.1
# Escreva uma função em Python que, ao receber uma lista de tuplas dos
# lançamentos de dois dados, retorne a tupla de maior soma.

# Casos de testes
# Entrada → Saída
# [(1, 2), (3, 4), (5, 6)] → (5, 6)
# [(1, 2), (3, 4), (2, 6)] → (2, 6)
# [(1, 2)] → (1, 2)
# [] → None

def maior_soma_elemento(array):
    if not array:  # Verifica se a lista está vazia
        return None
    
    # Usa a função max() com uma chave personalizada para encontrar a tupla de maior soma
    return max(array, key=lambda tupla: sum(tupla))

# Testes
print(maior_soma_elemento([(1, 2), (3, 4), (5, 6)]))  # Saída: (5, 6)
print(maior_soma_elemento([(1, 2), (3, 4), (2, 6)]))  # Saída: (2, 6)
print(maior_soma_elemento([(1, 2)]))  # Saída: (1, 2)
print(maior_soma_elemento([]))  # Saída: None