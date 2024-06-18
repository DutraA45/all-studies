-- Alterar tabela adicionando um novo campo
alter table empregado add uf_emp char (2) null

-- Alterar tabela removendo um campo
alter table empregado drop column uf_emp

-- Alterar tabela removendo uma restrição
alter table dependente drop constraint pk_dep

-- Alterar tabela adicionar uma restrição
alter table dependente add constraint pk_dep primary key (matemp, nomdep)

-- Remover tabelas
DROP table dependente
DROP table empregado