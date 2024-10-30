--
-- Primeira parte da Aula
--
-- SELECT especifica os campos
-- FROM especifica a tabela
-- WHERE especifica a condição de seleção

-- Retorna todos os valores da tabela Empregado
SELECT * FROM Empregado

-- Retorno mais especificado
SELECT NomEmp, CidEmp
FROM Empregado
WHERE MatEmp = 11


--
-- Segunda parte da Aula
--
-- Alterando a tabela com a adição do campo Salario
ALTER TABLE Empregado ADD Salario FLOAT NULL

-- Atualizando dados do campo Salario na tabela
UPDATE Empregado
SET Salario = 2000
WHERE MatEmp = 10;

UPDATE Empregado
SET Salario = 1000
WHERE MatEmp = 11;