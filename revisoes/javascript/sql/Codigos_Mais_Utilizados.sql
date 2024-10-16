-- 1. Criação de Tabela
-- Cria uma tabela chamada "Clientes" com três colunas: ID, Nome e Email.

CREATE TABLE Clientes (ID INT PRIMARY KEY, Nome VARCHAR(50), Email VARCHAR(100));



-- 2. Inserção de Dados
-- Insere um novo registro na tabela "Clientes" com um ID, Nome e Email.

INSERT INTO Clientes (ID, Nome, Email) VALUES (1, 'João', 'joao@email.com');



-- 3. Seleção de Dados
-- Seleciona os campos Nome e Email de todos os registros na tabela "Clientes".

SELECT Nome, Email FROM Clientes;



-- 4. Atualização de Dados
-- Atualiza o campo Email para um novo valor na tabela "Clientes" onde o ID é 1.

UPDATE Clientes SET Email = 'novo@email.com' WHERE ID = 1;



-- 5. Exclusão de Dados
-- Exclui um registro da tabela "Clientes" onde o ID é 1.

DELETE FROM Clientes WHERE ID = 1;



-- 6. Consulta com JOIN
-- Combina dados das tabelas "Pedidos" e "Clientes" usando uma junção interna.

SELECT Pedidos.ID, Clientes.Nome FROM Pedidos INNER JOIN Clientes ON Pedidos.ClienteID = Clientes.ID;



-- 7. Agregação de Dados (COUNT)
-- Calcula o número total de registros na tabela "Produtos".

SELECT COUNT(*) FROM Produtos;



-- 8. Agregação de Dados (SUM)
-- Calcula a soma dos valores na coluna "Preco" da tabela "Produtos".

SELECT SUM(Preco) FROM Produtos;



-- 9. Ordenação de Resultados
-- Retorna os nomes e preços dos produtos da tabela "Produtos" ordenados em ordem decrescente de preço.

SELECT Nome, Preco FROM Produtos ORDER BY Preco DESC;



-- 10. Filtragem de Dados (WHERE)
-- Seleciona produtos da categoria 'Eletrônicos' da tabela "Produtos".

SELECT Nome, Preco FROM Produtos WHERE Categoria = 'Eletrônicos';



-- 11. Atualização de Tabela (ALTER TABLE)
-- Adiciona uma nova coluna chamada "Desconto" à tabela "Produtos".

ALTER TABLE Produtos ADD Desconto FLOAT;



-- 12. Criação de Índice
-- Cria um índice chamado "IndiceNome" na coluna "Nome" da tabela "Produtos".

CREATE INDEX IndiceNome ON Produtos (Nome);



-- 13. Exclusão de Tabela
-- Remove completamente a tabela "Clientes" do banco de dados.

DROP TABLE Clientes;



-- 14. Agregação de Dados (AVG)
-- Calcula a média dos valores na coluna "Preco" da tabela "Produtos".

SELECT AVG(Preco) FROM Produtos;



-- 15. Consulta Distinta
-- Retorna valores únicos da coluna "Categoria" da tabela "Produtos".

SELECT DISTINCT Categoria FROM Produtos;



-- 16. Subconsulta
-- Seleciona nomes de clientes que fizeram pedidos com um valor total superior a 1000.

SELECT Nome FROM Clientes WHERE ID IN (SELECT ClienteID FROM Pedidos WHERE Total > 1000);



-- 17. Operador LIKE
-- Seleciona produtos cujo nome começa com "Camiseta".

SELECT Nome FROM Produtos WHERE Nome LIKE 'Camiseta%';



-- 18. Consulta Condicional (CASE)
-- Retorna o nome e uma categoria ('Caro' ou 'Barato') com base no preço dos produtos.

SELECT Nome, CASE WHEN Preco > 100 THEN 'Caro' ELSE 'Barato' END AS CategoriaPreco FROM Produtos;



-- 19. Limite de Resultados (OFFSET FETCH)
-- Retorna os primeiros 5 produtos ordenados por preço da tabela "Produtos".

SELECT Nome FROM Produtos ORDER BY Preco OFFSET 0 ROWS FETCH FIRST 5 ROWS ONLY;



-- 20. Agrupamento de Dados (GROUP BY e HAVING)
-- Agrupa produtos por categoria e conta quantos produtos estão em cada categoria.

SELECT Categoria, COUNT(*) AS Total FROM Produtos GROUP BY Categoria HAVING COUNT(*) > 5;
