# Comandos do MongoDB 
### (Conforme apresentado no curso)

Apresentar o DB que está usando:
> db
  
Apresentar todas as DB instaladas:
> show dbs

Para trocar e criar um Dataset (com nome aula):
> use aula

Apresentar todas as Collections instaladas:
> show collections

Cria uma Collection dentro do DB:
> db.albuns.insert({})

Verificar Collections dentro do DB:
> db.albuns.find()

Verificar melhor as Collections dentro de um DB grande:
> db.albuns.find().pretty()

Verificar Collections dentro do DB utilizando critérios:
> db.albuns.find({critério}).pretty()

Excluir uma Collection dentro do DB referente a um critério definido:
> db.albuns.remove({critério})

Atualizar as Collections dentro de um DB referente a um critério definido e uma ação:
No caso do exemplo abaixo, a ação set verifica se o campo já está criado, se estiver ela somente atualiza, caso contrário ela cria o campo.
> db.albuns.update({critério, {$set: {"duracao" : 3013}}})


### Collections para treinar
#### Albuns
> db.albuns.insert({"nome" : "The Dark Side of the Moon", "data" : new Date(1973, 3, 29)})
> db.albuns.insert({"nome" : "Master of Puppets", "dataLancamento" : new Date(1986, 2, 3), "duracao" : 3286})
> db.albuns.insert({"nome" : "...And Justice for All", "dataLancamento" : new Date(1988, 7, 25), "duracao" : 3929})
> db.albuns.insert({"nome" : "Among the Living", "produtor" : "Eddie Kramer"})
> db.albuns.insert({"nome" : "Nevermind", "artista" : "Nirvana", "estudioGravacao" : ["Sound City Studios", "Smart Studios (Madison)"], "dataLancamento" : new Date(1992, 0, 11)})
> db.albuns.insert({"nome" : "Reign in Blood", "dataLancamento" : new Date(1986, 9 , 7), "artista" : "Larry Carroll", "duracao" : 1738})
> db.albuns.insert({"nome" : "Seventh Son of a Seventh Son", "artista" : "Iron Maiden", "produtor" : "Martin Birch", "estudioGravacao" : "Musid Studios", "dataLancamento" : new Date(1988, 3, 11)})

#### Artistas
> db.artistas.insert([
    {"nome" : "Metallica", "id" : "1"},
    {"nome" : "Megadeath", "id" : "2"},
    {"nome" : "Slayer", "id" : "3"},
    {"nome" : "Anthrax", "id" : "4"},
    {"nome" : "Iron Maiden", "id" : "5"},
    {"nome" : "Nirvana", "id" : "6"},
    {"nome" : "Pink Floyd", "id" : "7"}
    ])

#### Update albuns para criar relacionamentos
> db.albuns.update({"nome" : "Master of Puppets"}, {$set : {"artista_id" : 1}})
> db.albuns.update({"nome" : "Among the Living"}, {$set : {"artista_id" : 4}})
> db.albuns.update({"nome" : "Neverming"}, {$set : {"artista_id" : 6}})
> db.albuns.update({"nome" : "Reign in Blood"}, {$set : {"artista_id" : 3}})
> db.albuns.update({"nome" : "Seventh Son of a Seventh Son"}, {$set : {"artista_id" : 5}})
> db.albuns.update({"nome" : "...And Justice for All"}, {$set : {"artista_id" : 1}})
> db.albuns.update({"nome" : "The Dark Side of the Moon"}, {$set : {"artista_id" : 7}})