/* 
Jogadores (Players):

ID (Chave Primária)
Nome do Jogador
Nível de Experiência
Pontuação Total
Armas (Weapons):

ID (Chave Primária)
Nome da Arma
Tipo de Arma (ex: rifle, pistola, granada)
Dano da Arma
Partidas (Matches):

ID (Chave Primária)
Data e Hora da Partida
Duração da Partida
Vencedor da Partida (ID do Jogador)

*/





CREATE TABLE Players (
    ID INT PRIMARY KEY,
    Nome VARCHAR(255) NOT NULL,
    Experiencia INT,
    PontuacaoTotal INT
);

CREATE TABLE Weapons (
    ID INT PRIMARY KEY,
    Nome VARCHAR(255) NOT NULL,
    Tipo VARCHAR(50),
    Dano INT
);

CREATE TABLE Matches (
    ID INT PRIMARY KEY,
    DataHora DATETIME,
    Duracao INT,
    VencedorID INT,
    FOREIGN KEY (VencedorID) REFERENCES Players(ID)
);
