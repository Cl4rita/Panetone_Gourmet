import Panetone from './model/Panetone.js'

const calcular = document.getElementById('calcular')
const res = document.getElementById('res')

const massaSelector = document.querySelector('#massaSelector')
const alturaSelector = document.querySelector('#alturaSelector')
const raioSelector = document.querySelector('#raioSelector')

function calcularVolumePanetone(){
    const altura = alturaSelector.value
    const raio = raioSelector.value
    const quantidade = Number(document.getElementById('quantidade').value)
    
    const panetone = new Panetone(raio, altura)
    const volume = panetone.calcularVolume().toFixed(2)
    const totalVolume = (volume * quantidade).toFixed(2)
    
    if(quantidade <= 0){
        res.innerHTML = "Por favor, coloque uma quantidade positiva."
        return
    }
    res.innerHTML = `O volume total para ${quantidade} panetone(s) é : ${totalVolume} cm³ <br>`
}
function calcularMassaEspecificaPanetone(){
    const quantidade = Number(document.getElementById('quantidade').value)
    const massa = massaSelector.value
    const altura = alturaSelector.value
    const raio = raioSelector.value

    const panetone = new Panetone(raio, altura, 0.7, massa)
    const massaEspecifica = panetone.calcularMassaEspecifica().toFixed(2)
    const totalMassaEspecifica = (massaEspecifica * quantidade).toFixed(2)

    res.innerHTML += `A massa específica total do panetone é : ${totalMassaEspecifica} g <br>`
}
function calcularPrecoPanetone(){
    const massa = massaSelecionada.value
    const quantidade = Number(document.getElementById('quantidade').value)

    const panetone = new Panetone(null, null, 0.7, massa)
    panetone.calcularIngredientes()
    const preco = panetone.calcularPrecoTotal().toFixed(2)
    const totalPreco = (preco * quantidade).toFixed(2)

    res.innerHTML += `O preço total é : ${totalPreco} reais`
}
calcular.addEventListener('click', ()=>{
    calcularVolumePanetone()
    calcularMassaEspecificaPanetone()
    calcularPrecoPanetone()
})
