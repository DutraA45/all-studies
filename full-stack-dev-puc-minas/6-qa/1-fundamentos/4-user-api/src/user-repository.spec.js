require('dotenv').config();
const { MongoClient } = require("mongodb");
const UserRepository = require('./user-repository')
const { ObjectId } = require('bson');
const uri = process.env.MONGO_URI;

describe('UserRepository', () => {

    let userRepository;
    let collection;
    let client;

    beforeAll(async () => {
        client = new MongoClient(uri);
        await client.connect();
        collection = client.db('users_db').collection('users');
        userRepository = new UserRepository(collection)
    })

    afterAll(async () => {
        await client.close()
    })

    beforeEach(async () => {
        await collection.deleteMany({})
    })

    describe('findOneById', () => {
        test('Deve retornar o usuário por id', async () => {

            const result = await collection.insertOne({
                name: 'John Doe',
                email: 'john@doe.com'
            })

            const user = await userRepository.findOneById(new ObjectId(result.insertedId));

            expect(user).toStrictEqual({
                id: result.insertedId,
                name: 'John Doe',
                email: 'john@doe.com'
            })
        })

        test('Deve lançar uma exceção para um usuário não existente', async () => {
            await expect(userRepository.findOneById(new ObjectId('61a05c492d399952b235d8bd')))
                .rejects.toThrow('User with id 61a05c492d399952b235d8bd does not exist')
        })
    })

    describe('findOneByEmail', () => {
        test('Deve retornar o usuário john@doe.com', async () => {

            const result = await collection.insertOne({
                name: 'John Doe',
                email: 'john@doe.com'
            })

            const user = await userRepository.findOneByEmail('john@doe.com');

            expect(user).toStrictEqual({
                id: result.insertedId,
                name: 'John Doe',
                email: 'john@doe.com'
            })
        })

        test('Deve lançar uma exceção para um usuário não existente', async () => {
            await expect(userRepository.findOneByEmail('john@doe.com'))
                .rejects.toThrow('User with email john@doe.com does not exist')
        })
    })

    describe('insert', () => {
        test('Inserir um novo usuário', async () => {

            const user = await userRepository.insert({
                name: 'John Doe',
                email: 'john@doe.com'
            })

            const result = await userRepository.findOneByEmail('john@doe.com')

            expect(result).toStrictEqual(user)
        })
    })

    describe('update', () => {
        test.todo('Deve atualizar um usuário existente'/*, async () => {
            const user = await userRepository.insert({
                name: 'Teste',
                email: 'teste@teste.com'
            });
            console.log(await collection.findOne({ _id: new ObjectId(user.id) }));

            await userRepository.update(new ObjectId(user.id), { 
                name: 'Teste Atualizado',
                email: 'teste2@teste.com'
            });
            

            const updatedUser = await userRepository.findOneByEmail('teste2@teste.com');

            expect(updatedUser).toStrictEqual({
                id: user.id,
                name: 'Teste Atualizado',
                email: 'teste2@teste.com'
            });
        }*/);
    });


    describe('delete', () => {
        test('Deve remover um usuário existente', async () => {
            const user = await userRepository.insert({
                name: 'John Doe',
                email: 'john@doe.com'
            });

            await userRepository.delete(user.id); // Corrigido de _id para id

            await expect(userRepository.findOneByEmail('john@doe.com')).rejects.toThrow();
        });
    });

    describe('findAll', () => {
        test('Deve retornar uma lista vazia de usuários', async () => {
            const list = await userRepository.findAll()
            expect(list).toStrictEqual([])
        })
        test('Deve retornar uma lista contendo dois usuários', async () => {

            const user1 = await userRepository.insert({
                name: 'John Doe',
                email: 'john@doe.com'
            })

            const user2 = await userRepository.insert({
                name: 'Alice Doe',
                email: 'alice@doe.com'
            })

            const list = await userRepository.findAll()

            expect(list).toStrictEqual([user1, user2])
        })
    })
})