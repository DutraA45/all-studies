const greet = require('./greeting')

describe("Saudação", () => {
    test("Saudar o nome 'Tales'", () => {
        expect(greet('Tales')).toBe('Olá Tales, seja bem vindo ao curso de Desenvolvimento Web')
    })

    test("Saudar um nome vazio deve gerar uma exceção", () => {
        const execution = () => greet('')
        expect(execution).toThrow()
    })

    test("Saudar um nome undefined deve gerar uma exceção", () => {
        const execution = () => greet(undefined)
        expect(execution).toThrow()
    })
})