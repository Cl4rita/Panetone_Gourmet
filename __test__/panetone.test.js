import Panetone from "../model/Panetone.js"

describe("Teste unitário da classe panetone", ()=>{
    test("Calculo do volume do panetone", ()=>{

        const raio = 4
        const altura = 5
        const volumePanetone = Math.PI * Math.pow(this.raio, 2) * altura
        const panetone = new Panetone(raio, altura)

        expect(panetone.calcularVolume()).toBeCloseTo(volumePanetone, 2)
    })
    test("Calculo da massa especifica do panetone", ()=>{

        const raio = 4
        const altura = 5
        const massaEspecifica = 0.7 * volumePanetone
        const panetone = new Panetone(raio, altura, 0.7)

        expect(panetone.calcularMassaEspecifica()).toBeCloseTo(massaEspecifica, 2)
    })
    test("Calculo do ingredientes da massa de 700 do panetone", ()=>{

        const massa = 700

        const farinha = (250 * massa) / 440
        const fermento = (10 * massa) / 440
        const leite = (60 * massa) / 440
        const ovos = arredondar((2 * massa) / 440)
        const manteiga = (55 * massa) / 440
        const acucar = (60 * massa) / 440
        const mel = (10 * massa) / 440
        const baunilha = (5 * massa) / 440
        const frutas = (100 * massa) / 440
        const raspas = (5 * massa) / 440
        const sal = (2 * massa) / 440

        const ingredientes = new Panetone(farinha, fermento, leite, ovos, manteiga, acucar, mel, baunilha, frutas, raspas, sal)

        expect(ingredientes.calcularIngredientes()).toBeCloseTo(2)

    })

    test("Calculo do ingredientes da massa de 440 do panetone", ()=>{

        const massa = 440

        const farinha = (250 * massa) / 440
        const fermento = (10 * massa) / 440
        const leite = (60 * massa) / 440
        const ovos = arredondar((2 * massa) / 440)
        const manteiga = (55 * massa) / 440
        const acucar = (60 * massa) / 440
        const mel = (10 * massa) / 440
        const baunilha = (5 * massa) / 440
        const frutas = (100 * massa) / 440
        const raspas = (5 * massa) / 440
        const sal = (2 * massa) / 440

        const ingredientes = new Panetone(farinha, fermento, leite, ovos, manteiga, acucar, mel, baunilha, frutas, raspas, sal)

        expect(ingredientes.calcularIngredientes()).toBeCloseTo(2)

    })

    test("Calculo do ingredientes da massa de 180 do panetone", ()=>{

        const massa = 180

        const farinha = (250 * massa) / 440
        const fermento = (10 * massa) / 440
        const leite = (60 * massa) / 440
        const ovos = arredondar((2 * massa) / 440)
        const manteiga = (55 * massa) / 440
        const acucar = (60 * massa) / 440
        const mel = (10 * massa) / 440
        const baunilha = (5 * massa) / 440
        const frutas = (100 * massa) / 440
        const raspas = (5 * massa) / 440
        const sal = (2 * massa) / 440

        const ingredientes = new Panetone(farinha, fermento, leite, ovos, manteiga, acucar, mel, baunilha, frutas, raspas, sal)

        expect(ingredientes.calcularIngredientes()).toBeCloseTo(2)

    })
})