-- Tabela de Alunos
CREATE TABLE Alunos (
    AlunoID INT PRIMARY KEY,
    NomeAluno VARCHAR(50)
);

-- Tabela de Cursos
CREATE TABLE Cursos (
    CursoID INT PRIMARY KEY,
    NomeCurso VARCHAR(50)
);

-- Tabela de Matrículas (N:N entre Alunos e Cursos)
CREATE TABLE Matriculas (
    MatriculaID INT PRIMARY KEY,
    AlunoID INT,
    CursoID INT,
    FOREIGN KEY (AlunoID) REFERENCES Alunos(AlunoID),
    FOREIGN KEY (CursoID) REFERENCES Cursos(CursoID)
);
