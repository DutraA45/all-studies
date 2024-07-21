## Comandos

Criar nós (vértices)
> CREATE(dylan:Musico {nome : 'Bob Dylan', data_de_nascimento : '1941-05-24'})
> CREATE(hendrix:Musico {nome : "Jimi Hendrix"})
> CREATE(al_along:Musica {nome : "All Along the Watchtower"})


Criar relacionamentos (Arestas)
> MATCH (hendrix:Musico{nome: "Jimi Hendrix"}),(al_along:Musica{nome: "All Along the Watchtower"})
> CREATE (hendrix)-[r:GRAVOU]->(al_along)

> MATCH (bob:Musico { nome : 'Bob Dylan'}),
> (al_along:Musica { nome : 'All Along the Watchtower'})
> CREATE (bob)-[r:GRAVOU]->(al_along)
> CREATE (bob)-[s:COMPOS]->(al_along)

Realizar consultas
> MATCH (m) RETURN m
> MATCH (m:Musico) RETURN m.nome
> MATCH (m:Musico) WHERE m.nome = 'Bob Dylan' Return m.nome
> MATCH (m:Musico {nome = 'Bob Dylan'}) RETURN m.nome

Realizar consultas utilizando relacionamento como critério
> MATCH (n1)-[]-()
> RETURN n1

> MATCH ()-[]->(n1)
> RETURN count n1

> MATCH (n1:Musico)-[r:GRAVOU]->(n2:Musica)
> RETURN n1, type(r), n2

Editar nós no grafo
> MATCH (hendrix:Musico {nome = 'Jimi Hendrix'})
> SET hendrix.data_de_nascimento = '1942-11-27'
> RETURN hendrix

Deletar campo do nó
> MATCH (hendrix:Musico {nome = 'Jimi Hendrix'})
> SET hendrix.data_de_nascimento = null
> RETURN hendrix

Deletar nó (Não pode possuir relacionamento)
> MATCH (hendrix:Musico {nome = 'Jimi Hendrix'})
> DELETE hendrix