-- Criar tabela Aluno
CREATE TABLE Aluno (
    matricula int,
    nome varchar(30),
    CONSTRAINT pk_matricula PRIMARY KEY (matricula)
);

-- Inserir dados na tabela Aluno
insert into Aluno (matricula, nome) values (10, 'Maria');

-- Exibir dados da tabela Aluno
select * from Aluno