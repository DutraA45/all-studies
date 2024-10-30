import pymongo

client = pymongo.MongoClient('mongodb://localhost', 27017)
db = client.aula

albuns = db.albuns.find()

file = open("C:\\Users\\jeffi\\Documents\\all-studies\\full-stack-dev-puc-minas\\banco-de-dados\\2-nao-relacional\\1-mongodb", "a")

for item in albuns:
    nome = item["nome"]
    file.write(nome + '\n')
    
file.close()