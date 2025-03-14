export default class Panetone{
    constructor(raio, altura, massa){
        this.raio = raio
        this.altura = altura
        this.massa = massa
    }

    densidade = 0.7 

    calcularVolume(){
        return Math.PI * Math.pow(this.raio,2) * this.altura
    }

    calcularMassaEspecifica(){
        return this.densidade * this.calcularVolume()
    }

    calcularIngredientes(){
       this.farinha = (250 * this.massa) / 440
       this.fermento = (10 * this.massa) / 440
       this.leite = (60 * this.massa) / 440
       this.ovos = Math.round((2 * this.massa) / 440)
       this.manteiga = (55 * this.massa) / 440
       this.acucar = (60 * this.massa) / 440
       this.mel = (10 * this.massa) / 440
       this.baunilha = (5 * this.massa) / 440
       this.frutas = (100 * this.massa) / 440
       this.raspas = (5 * this.massa) / 440
       this.sal = (2 * this.massa) / 440
       return
    }

    calcularPrecoTotal(){
        return this.precoT = (this.farinha * 0.0075) + (this.fermento * 0.0019) + (this.leite * 0.0048) + (this.ovos * 1.33) + (this.manteiga * 0.0675) + (this.acucar * 0.018) + (this.mel * 0.06) + (this.baunilha * 0.163) + (this.frutas * 0.0519) + (this.raspas * 0.015) + (this.sal * 0.0027)
    }
}	
/* 1,875
0,019
0,288
2,66
3,7125
1,08
0,6
0,815
5,19
0,075
0,0054
*/