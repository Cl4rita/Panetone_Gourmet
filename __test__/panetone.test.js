import Panetone from "../model/Panetone.js"

describe("Teste unitário da classe Panetone", () => {
    test("Cálculo do volume do panetone", () => {
        const raio = 4
        const altura = 5
        const volume = Math.PI * Math.pow(raio, 2) * altura
        const panetone = new Panetone(raio, altura, 0.7)

        expect(panetone.calcularVolume()).toBeCloseTo(volume, 2)
    })

    test("Cálculo da massa específica do panetone", () => {
        const raio = 4
        const altura = 5
        const densidade = 0.7
        const volume = Math.PI * Math.pow(raio, 2) * altura
        const massaEspecifica = densidade * volume
        const panetone = new Panetone(raio, altura, densidade)

        expect(panetone.calcularMassaEspecifica()).toBeCloseTo(massaEspecifica, 2)
    })

    test("Cálculo dos ingredientes para massa de 700g do panetone", () => {
        const massa = 700

        const farinha = (250 * massa) / 440
        const fermento = (10 * massa) / 440
        const leite = (60 * massa) / 440
        const ovos = Math.round((2 * massa) / 440)
        const manteiga = (55 * massa) / 440
        const acucar = (60 * massa) / 440
        const mel = (10 * massa) / 440
        const baunilha = (5 * massa) / 440
        const frutas = (100 * massa) / 440
        const raspas = (5 * massa) / 440
        const sal = (2 * massa) / 440

        const ingredientes = new Panetone(4, 5, massa)
        ingredientes.calcularIngredientes()

        expect(ingredientes.farinha).toBeCloseTo(farinha, 2)
        expect(ingredientes.fermento).toBeCloseTo(fermento, 2)
        expect(ingredientes.leite).toBeCloseTo(leite, 2)
        expect(ingredientes.ovos).toBe(ovos)
        expect(ingredientes.manteiga).toBeCloseTo(manteiga, 2)
        expect(ingredientes.acucar).toBeCloseTo(acucar, 2)
        expect(ingredientes.mel).toBeCloseTo(mel, 2)
        expect(ingredientes.baunilha).toBeCloseTo(baunilha, 2)
        expect(ingredientes.frutas).toBeCloseTo(frutas, 2)
        expect(ingredientes.raspas).toBeCloseTo(raspas, 2)
        expect(ingredientes.sal).toBeCloseTo(sal, 2)
    })

    test("Cálculo dos ingredientes para massa de 440g do panetone", () => {
        const massa = 440

        const farinha = (250 * massa) / 440
        const fermento = (10 * massa) / 440
        const leite = (60 * massa) / 440
        const ovos = Math.round((2 * massa) / 440)
        const manteiga = (55 * massa) / 440
        const acucar = (60 * massa) / 440
        const mel = (10 * massa) / 440
        const baunilha = (5 * massa) / 440
        const frutas = (100 * massa) / 440
        const raspas = (5 * massa) / 440
        const sal = (2 * massa) / 440

        const ingredientes = new Panetone(4, 5, massa)
        ingredientes.calcularIngredientes()

        expect(ingredientes.farinha).toBeCloseTo(farinha, 2)
        expect(ingredientes.fermento).toBeCloseTo(fermento, 2)
        expect(ingredientes.leite).toBeCloseTo(leite, 2)
        expect(ingredientes.ovos).toBe(ovos)
        expect(ingredientes.manteiga).toBeCloseTo(manteiga, 2)
        expect(ingredientes.acucar).toBeCloseTo(acucar, 2)
        expect(ingredientes.mel).toBeCloseTo(mel, 2)
        expect(ingredientes.baunilha).toBeCloseTo(baunilha, 2)
        expect(ingredientes.frutas).toBeCloseTo(frutas, 2)
        expect(ingredientes.raspas).toBeCloseTo(raspas, 2)
        expect(ingredientes.sal).toBeCloseTo(sal, 2)

    })

    test("Cálculo dos ingredientes para massa de 180g do panetone", () => {
        const massa = 180

        const farinha = (250 * massa) / 440
        const fermento = (10 * massa) / 440
        const leite = (60 * massa) / 440
        const ovos = Math.round((2 * massa) / 440)
        const manteiga = (55 * massa) / 440
        const acucar = (60 * massa) / 440
        const mel = (10 * massa) / 440
        const baunilha = (5 * massa) / 440
        const frutas = (100 * massa) / 440
        const raspas = (5 * massa) / 440
        const sal = (2 * massa) / 440

        const ingredientes = new Panetone(4, 5, massa)
        ingredientes.calcularIngredientes()

        expect(ingredientes.farinha).toBeCloseTo(farinha, 2)
        expect(ingredientes.fermento).toBeCloseTo(fermento, 2)
        expect(ingredientes.leite).toBeCloseTo(leite, 2)
        expect(ingredientes.ovos).toBe(ovos)
        expect(ingredientes.manteiga).toBeCloseTo(manteiga, 2)
        expect(ingredientes.acucar).toBeCloseTo(acucar, 2)
        expect(ingredientes.mel).toBeCloseTo(mel, 2)
        expect(ingredientes.baunilha).toBeCloseTo(baunilha, 2)
        expect(ingredientes.frutas).toBeCloseTo(frutas, 2)
        expect(ingredientes.raspas).toBeCloseTo(raspas, 2)
        expect(ingredientes.sal).toBeCloseTo(sal, 2)

    })
})
