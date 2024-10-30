// Importa o módulo do Express Framework
const express = require('express')

// Inicializa um objeto de aplicação Express
const app = express()

// Para tratar qualquer tipo de arquivo json que seja recebido no body de uma requisição
// Middleware de parser (bodyParser)
app.use(express.json())

// Middleware A
// Para qualquer requisição, imprime no console a data, o tipo e a rota
app.use((req, res, next) => {
    console.log(new Date().toLocaleDateString(), req.method, req.path)
    next()
})

// Provimento de um arquivo estático
app.use('/site', express.static('public'))

// Manipulador de rotas POST
// Para usar o req.body, é necessário de um middleware de parser
app.post('/users', (req, res) => {
    dados = req.body
    console.log(dados)
    res.send(`Informação recebida com sucesso. Seja bem-vindo ${dados.nome} (${dados.email})`)
})

// Manipulador de rotas GET
// Exemplo usando query string:
// http://127.0.0.1:3000/users/Jefferson?cidade=Lorena
app.get('/users/:nome', (req, res) => {
    res.send(`Olá ${req.params.nome} - cidade: ${req.query.cidade}`)
})

// Manipulador de rotas GET
// Exemplo usando método do objeto de requisição (req.accepts e req.get):
app.get('/dados', (req, res) => {
    console.log(req.get('Content-Type'))
    if (req.accepts('application/json')) {
        res.send ({message: 'Olá amigo JSON'})
    } else {
        res.send ('<h1>Olá</h1>')
    }


    /* Exemplo usando método do objeto de resposta (res.format):*/
    // res.format({
    //     'text/html': () => {
    //         res.send ('<h1>Olá</h1>')
    //     },
    //     'application/json': () => {
    //         res.send ({message: 'Olá'})
    //     }
    // })
})

// Inicializa o servidor HTTP na porta 3000
app.listen(3000, function () {
    console.log(`Servidor rodando na porta 3000`)
})