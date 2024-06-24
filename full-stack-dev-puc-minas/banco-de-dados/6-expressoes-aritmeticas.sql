-- Retorna os dados de 2 colunas e cria uma nova coluna com uma operacao
SELECT nomemp, salario, 12 * (salario + 300)
FROM empregado

-- A funcao as da um apelido para a coluna
SELECT nomemp as nome, salario as salario, 12 * (salario + 300) as salarioMaior
FROM empregado

-- Para dar apelido para uma tabela não precisa do as, no entanto, é necessario referenciar no momento da coluna
-- Exemplo abaixo o apelido da tabela empregado é E
SELECT E.nomemp as nome, E.salario as salario, 12 * (E.salario + 300) as salarioMaior
FROM empregado E