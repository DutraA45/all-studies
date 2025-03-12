# Desafio 13.1

# Escreva uma em Python função que, dadas duas listas, retorne os elementos que são comuns
# a ambas, sem repetições.


def elementos_comuns(lista1, lista2):
    set1 = set(lista1)
    set2 = set(lista2)
    comuns = set1.intersection(set2)
    return list(comuns)

def test_elementos_comuns():
    assert (elementos_comuns([1, 2, 3, 4], [3, 4, 5, 6]) == [3, 4] or elementos_comuns([1, 2, 3, 4], [3, 4, 5, 6]) == [4, 3])
    print("Todos os testes passaram!")
    
test_elementos_comuns()
