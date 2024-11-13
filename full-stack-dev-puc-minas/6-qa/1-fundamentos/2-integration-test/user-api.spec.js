const UserApi = require('./user-api')

describe("UserApi", () => {

    describe("findAll", () => {
        test("Deve retornar lista de usuários", () => {

            const userApi = new UserApi()

            return userApi.findAll().then(users => {
                //console.info(users)
                expect(users.length).toBeGreaterThan(0)
            })

        });
    })

    describe("findOne", () => {
        test("Deve retornar usuário existente", () => {
            const userApi = new UserApi()

            return userApi.findOne(1).then(user => {
                expect(user.id).toBe(1)
                expect(user.name).toBe('Leanne Graham')
            })
        });

        test("Deve lançar uma exceção para usuário inexistente", () => {
            const userApi = new UserApi()

            return userApi.findOne(10000).catch(exception => {
                expect(exception.message).toBe('User 10000 was not found')
            })
        });
    })

})