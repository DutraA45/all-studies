-- Criação da tabela empregado
create table empregado (
    matemp smallint not null,
    nememp char (30) not null, 
    endemp char (80) null,
    cidemp char (20),
    constraint pk_emp primary key (matemp)
)

-- Criação da tabela dependente 
-- Faz referencia a tabela empregado pela chave estrangeira emp_dep
create table dependente (
    nomdep char (30),
    datnasc date,
    matemp smallint,
    constraint pk_dep primary key (matemp, nomdep),
    constraint fk_emp_dep foreign key (matemp) references empregado (matemp)
)