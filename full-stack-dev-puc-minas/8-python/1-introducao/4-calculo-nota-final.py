# Desafio 4.1

# Crie uma função nota_final, que calcula a nota final de um aluno com base em dois
# parâmetros: uma nota para o exame e um número de projetos concluídos.
# Esta função deve receber dois argumentos: exame - nota do exame (de 0 a 100); projetos -
# número de projetos concluídos (de 0 em diante);

# Esta função deve retornar um número (nota final). Existem quatro tipos de notas finais:
# • 100, se a nota do exame for superior a 90 ou se o número de projetos concluídos for
# superior a 10.
# • 90, se a nota do exame for superior a 75 e se o número de projetos concluídos for no
# mínimo 5.
# • 75, se a nota do exame for superior a 50 e se o número de projetos concluídos for no
# mínimo 2.
# • 0, nos outros casos.

# Exemplos
# Entradas --> Saída
# 100, 12 --> 100
# 99, 0 --> 100
# 10, 15 --> 100
# 85, 5 --> 90
# 55, 3 --> 75
# 55, 0 --> 0
# 20, 2 --> 0


def nota_final(notaExame, projetos):
    if (notaExame > 90 or projetos > 10): print(100)
    elif (notaExame > 75 or projetos > 5): print(90)
    elif (notaExame > 50 or projetos > 2): print(75)
    else: print(0)

nota_final(20, 2)