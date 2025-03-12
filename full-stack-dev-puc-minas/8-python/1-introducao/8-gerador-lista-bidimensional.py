# Desafio 12.1

# Você está reunindo informações de contato de todos os usuários do seu site para
# enviar a eles um pequeno presente. Você consultou seu banco de dados e obteve
# de volta uma lista de usuários, onde cada usuário é outra lista com até dois itens:
# uma string representando o nome do usuário e seu CEP para envio. Os dados de
# exemplo têm o seguinte conteúdo:
# [["Grae Drake", 98110],
# ["Bethany Kok"],
# ["Alex Nussbacher", 94101],
# ["Darrell Silver", 11201]]

# Observe que um dos usuários acima tem um nome, mas não possui um CEP.
# Escreva uma função que receba uma lista bidimensional como a acima e retorne
# um dicionário com um item para cada usuário, onde a chave é o nome do usuário e
# o valor é o CEP do usuário. Se os dados do usuário não incluem um CEP, o valor
# deve ser None.
# {
# "Grae Drake": 98110,
# "Bethany Kok": None,
# "Alex Nussbacher": 94101,
# "Darrell Silver": 11201,
# }
# Você não precisa se preocupar com zeros à esquerda em códigos postais.
