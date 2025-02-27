# Desafio 5.1

# Escreva uma função em Python chamada verifica_palindromo que recebe uma
# string como entrada e determina se a string é um palíndromo ou não. A função deve
# ignorar espaços, pontuações e diferenciação entre maiúsculas e minúsculas ao
# verificar se a string é um palíndromo. Considere que a string passada como
# parâmetro não possui acentuação.

# Casos de testes
# Entradas --> Saída
# “O ceu sueco” --> True
# “A amarga grama” --> False
# “A grama e amarga” --> True
# “O lobo ama o bolo” --> True
# “A casa da sacada” --> False

def verifica_palindromo(string:str):
    
    stringFormatada = string.replace(" ", "").lower()
    
    if (stringFormatada == stringFormatada[::-1]): print(True)
    else: print(False) 
    

    
verifica_palindromo("O ceu sueco")