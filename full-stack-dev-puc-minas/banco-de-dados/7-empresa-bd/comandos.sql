-- Verificar se o script funcionou corretamente e retornar todos os dados
SELECT * FROM empregado

-- Consulta para saber quais os clientes possuo no banco
-- No caso da nossa base, o cliente 11 possue 2 contas e aparece repetido
-- Para solucionar esse problema, utiliza o DISTINCT, ele remove duplicatas
SELECT DISTINCT codcliente
FROM conta

-- Consulta retornando as colunas nomeemp e cargo, da tabela empregado, com o filtro 'Savassi' na coluna bairro
SELECT nomemp, cargo
FROM empregado
WHERE bairro = 'Savassi'

-- Consulta com especificações de caracteres ou letras utilizase o LIKE
-- Filtro de nomeemp cuja a segunda letra é a letra 'a'
SELECT nomemp, cargo
FROM empregado
WHERE nomemp LIKE '_a%'

-- Consulta com filtro de retornar somente empregados que possuam salario entre 30~40k e trabalha no departamento 1
SELECT * 
FROM empregado
WHERE (salario BETWEEN 30000 AND 40000) AND coddepto = 1

-- Consulta de empregados cujo o nome do cargo não seja 'Vendedor' ou 'Presidente'
SELECT nomemp
FROM empregado
WHERE cargo not in ('Vendedor', 'Presidente')

-- Consulta de empregados que não tenham comissão e são do departamento 1
SELECT nomemp
FROM empregado
WHERE comissao IS NOT null AND coddepto = 1