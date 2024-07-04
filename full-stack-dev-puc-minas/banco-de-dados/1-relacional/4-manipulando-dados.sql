-- Primeira forma de inserção de dados
INSERT INTO Empregado (MatEmp, NomEmp, EndEmp, CidEmp)
VALUES (10, 'Marcos Ramos', 'Rua X', 'Itabira');

-- Segunda forma de inserção de dados, dessa vez omitindo os campos
INSERT INTO Empregado VALUES (11, 'Marcos Ramos', null, 'Itabira');

-- Inserindo dados em Dependente, MatEmp é a chave estrangeira
-- Carlos é dependente de Marcos
INSERT INTO Dependente (NomDep, DatNasDep, MatEmp)
VALUES ('Carlos Ramos', '10/01/2023', 10);

-- Deleção de dados
DELETE FROM Empregado 
WHERE MatEmp = 12;

-- Atualização de dados
UPDATE Empregado 
SET EndEmp = 'Rua Branca' 
WHERE MatEmp = 10