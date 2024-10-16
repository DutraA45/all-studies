-- Tabela de Clientes
CREATE TABLE Clientes (
    ClienteID INT PRIMARY KEY,
    Nome VARCHAR(50)
);

-- Tabela de Pedidos (1:1 com Clientes)
CREATE TABLE Pedidos (
    PedidoID INT PRIMARY KEY,
    NumeroPedido VARCHAR(20),
    ClienteID INT,
    FOREIGN KEY (ClienteID) REFERENCES Clientes(ClienteID)
);
