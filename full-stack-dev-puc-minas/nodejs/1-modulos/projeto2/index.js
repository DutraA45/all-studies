// Importa o módulo do Express Framework
const express = require('express')

// Inicializa um objeto de aplicação Express
const app = express()

// Cria um manipulador da rota padrão
// Middleware A
app.use((req, res, next) => {
    console.log(new Date().toLocaleDateString(), req.method, req.path)

    next()
})

// Middleware B
app.get('/', (req, res) => {
    res.send('Hello World')
})

// Middleware C
// app.get necessita de rota para manipular
// app.use não necessita de rota pois manipula qualquer tipo de requisão HTTP para qualquer rota
// Mesmo assim, é possivel definir rotas específicas para o 'use'
app.use((req, res) => {
    res.status(404).send('Recurso não foi encontrado')
})

// Inicializa o servidor HTTP na porta 3000
app.listen(3000, function () {
    console.log('Servidor rodando na porta 3000')
})