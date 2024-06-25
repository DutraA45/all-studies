-- Verificar se o script funcionou corretamente e retornar todos os dados
SELECT * FROM empregado;

-- Consulta para saber quais os clientes possuo no banco
-- No caso da nossa base, o cliente 11 possue 2 contas e aparece repetido
-- Para solucionar esse problema, utiliza o DISTINCT, ele remove duplicatas
SELECT DISTINCT codcliente
FROM conta;

-- Consulta retornando as colunas nomeemp e cargo, da tabela empregado, com o filtro 'Savassi' na coluna bairro
SELECT nomemp, cargo
FROM empregado
WHERE bairro = 'Savassi';

-- Consulta com especificações de caracteres ou letras utilizase o LIKE
-- Filtro de nomeemp cuja a segunda letra é a letra 'a'
SELECT nomemp, cargo
FROM empregado
WHERE nomemp LIKE '_a%';

-- Consulta com filtro de retornar somente empregados que possuam salario entre 30~40k e trabalha no departamento 1
SELECT * 
FROM empregado
WHERE (salario BETWEEN 30000 AND 40000) AND coddepto = 1;

-- Consulta de empregados cujo o nome do cargo não seja 'Vendedor' ou 'Presidente'
SELECT nomemp
FROM empregado
WHERE cargo not in ('Vendedor', 'Presidente');

-- Consulta de empregados que não tenham comissão e são do departamento 1
SELECT nomemp
FROM empregado
WHERE comissao IS NOT null AND coddepto = 1;

-- Consulta retornando o salario com funções agregadas
SELECT SUM (salario) as soma, MAX (salario) as maior, MIN (salario) as menor, AVG (salario) as media
FROM Empregado;

-- Consulta da quantidade de empregados na tabela (Funcao agregada)
SELECT count(*)
FROM empregado;

-- ORDENACAO
-- Consulta de empregado com ordenação ascendente
SELECT nomemp
FROM empregado
ORDER BY nomemp;

-- Consulta de empregado com ordenação descendente
SELECT nomemp
FROM empregado
ORDER BY nomemp desc;

-- AGRUPAMENTO
-- Consulta de departamentos, agrupando os empregados por departamentos
-- Com o agrupamento, é possivel saber a qtd de empregados e a média salarial por departamentos
SELECT coddepto, COUNT (*) as qtd, AVG (salario) as sal
FROM empregado
GROUP BY coddepto;

-- WHERE filtra as linhas das tabelas
-- HAVING filtra os grupos das tabelas
SELECT P.CodProjeto, P.ProjNome, Count (*)
FROM Projeto P, Trabalha_Em T
WHERE P.CodProjeto = T.CodProjeto
GROUP By P.CodProjeto, P.ProjNome
HAVING COUNT (*) > 2;

-- Consultas Aninhadas
SELECT nomemp
FROM empregado
WHERE salario > ALL (SELECT salario FROM empregado WHERE coddepto =2)

-- JOIN
-- Intersecao de tabelas
SELECT *
FROM empregado E JOIN departamento D ON E.coddepto = D.coddepto