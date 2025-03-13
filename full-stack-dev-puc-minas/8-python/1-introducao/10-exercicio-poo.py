class Musica:
    def __init__(self, titulo, artista):
        self.titulo = titulo
        self.artista = artista
        self.ouvintes = set()
        
    def conta_numero_de_ouvintes(self, pessoas):
        novos_ouvintes = 0
        for pessoa in pessoas:
            nome_normalizado = pessoa.lower()
            if nome_normalizado not in self.ouvintes:
                novos_ouvintes += 1
                self.ouvintes.add(nome_normalizado)
        return novos_ouvintes

def test_musica():
    que_pais_e_este = Musica("Que Pais é Este", "Legião Urbana")
    assert que_pais_e_este.titulo == "Que Pais é Este"
    assert que_pais_e_este.artista == "Legião Urbana"
    
    print("Todos os testes passaram!")
    

test_musica()