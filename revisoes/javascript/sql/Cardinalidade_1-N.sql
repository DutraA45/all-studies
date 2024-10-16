-- Tabela de Departamentos
CREATE TABLE Departamentos (
    DepartamentoID INT PRIMARY KEY,
    NomeDepartamento VARCHAR(50)
);

-- Tabela de Funcionários (1:N com Departamentos)
CREATE TABLE Funcionarios (
    FuncionarioID INT PRIMARY KEY,
    Nome VARCHAR(50),
    DepartamentoID INT,
    FOREIGN KEY (DepartamentoID) REFERENCES Departamentos(DepartamentoID)
);
