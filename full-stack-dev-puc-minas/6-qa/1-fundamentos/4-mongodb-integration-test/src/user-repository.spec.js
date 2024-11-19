require('dotenv').config();

const { MongoClient } = require("mongodb");
const uri = process.env.MONGO_URI;


describe('UserRepository', () => {

    let userRepository;
    let collection;
    let client;

    beforeAll(async () => {

        client = new MongoClient(uri);
        await client.connect();
    })

    afterAll(async () => {
        await client.close();
    })

    describe('findOneByEmail', () => {
        test.todo('Deve retornar o usuário john@doe.com')
        test.todo('Deve lançar uma exceção para um usuário não existente')
    })

    describe('insert', () => {
        test.todo('Inserir um novo usuário')
    })

    describe('update', () => {
        test.todo('Deve atualizar um usuário existente')
        test.todo('Deve lançar uma exceção para um usuário não existente')
    })

    describe('update', () => {
        test.todo('Deve remover um usuário existente')
        test.todo('Deve lançar uma exceção para um usuário não existente')
    })

    describe('findAll', () => {
        test.todo('Deve retornar uma lista vazia de usuários')
        test.todo('Deve retornar uma lista contendo dois usuários')
    })

})