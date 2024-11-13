const twoSum = require('./two-sum')

describe("Two Sum Problem", () => {

    test("0, [] deve gerar exceção", () => {
        const execution = () => twoSum(0, [])
        expect(execution).toThrow('Array deve conter pelo menos dois numeros')
    });

    test("0, [0] deve gerar exceção", () => {
        const execution = () => twoSum(0, [0])
        expect(execution).toThrow('Array deve conter pelo menos dois numeros')
    });

    test("0, [0, 0] deve retornar [0, 0]", () => {
        const execution = () => twoSum(0, [0])
        expect(twoSum(0, [0, 0])).toStrictEqual([0, 0])
    });

    test("1, [0, 1] deve retornar [0, 1]", () => {

    });

    test("1, [1, 0] deve retornar [1, 0]", () => {

    });

    test("5, [0, 1, 2, 3, 4, 5] deve retornar [1, 4]", () => {

    });
})