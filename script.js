
let botao = document.getElementById("button")
let select = document.getElementById("moedas")
let select2 = document.getElementById("moedas50")


async function clique() {

    let valoresdeMoedas = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL").then(function (resposta) {
        return resposta.json()
    })
    let dolar = valoresdeMoedas.USDBRL.high
    let euro = valoresdeMoedas.EURBRL.high

    let inputReais = Number(document.getElementById("input").value)
    let moedadolar = document.getElementById("inputdolar")
    let moedareal = document.getElementById("moedabrl")
    if (select2.value === "R$ Real Brasileiro" && select.value === "U$ Dólar Americano") {
        let valordolar = inputReais / dolar
        let valorreal = inputReais
        moedadolar.innerHTML = valordolar.toLocaleString('en-us', { style: 'currency', currency: 'USD' })
        moedareal.innerHTML = valorreal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
    }
    if (select2.value === "Є Euro" && select.value === "R$ Real Brasileiro") {
        let valorreal = inputReais * euro
        let valoreuro = inputReais
        moedareal.innerHTML = valoreuro.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })
        moedadolar.innerHTML = valorreal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
    }

    if (select2.value === "U$ Dólar Americano" && select.value === "Є Euro") {
        let valoreuro = (dolar * inputReais) / euro
        let valordolar = inputReais
        moedareal.innerHTML = valordolar.toLocaleString('en-us', { style: 'currency', currency: 'USD' })
        moedadolar.innerHTML = valoreuro.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })
    }
    if (select2.value === "Є Euro" && select.value === "U$ Dólar Americano") {
        let valordolar = ((euro * inputReais) / dolar)
        let valoreuro = inputReais
        moedareal.innerHTML = valoreuro.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })
        moedadolar.innerHTML = valordolar.toLocaleString('en-us', { style: 'currency', currency: 'USD' })
    }

    if (select2.value === "R$ Real Brasileiro" && select.value === "Є Euro") {
        let valoreuro = inputReais / euro
        let valorreal = inputReais
        moedareal.innerHTML = valorreal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
        moedadolar.innerHTML = valoreuro.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })
    }

    if (select2.value === "U$ Dólar Americano" && select.value === "R$ Real Brasileiro") {
        let valorreal = dolar * inputReais
        let valordolar = inputReais
        moedareal.innerHTML = valordolar.toLocaleString('en-us', { style: 'currency', currency: 'USD' })
        moedadolar.innerHTML = valorreal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
    }

    if (select2.value === "U$ Dólar Americano" && select.value === "U$ Dólar Americano") {
        let valorreal = inputReais
        let valordolar = inputReais
        moedareal.innerHTML = valordolar.toLocaleString('en-us', { style: 'currency', currency: 'USD' })
        moedadolar.innerHTML = valorreal.toLocaleString('en-us', { style: 'currency', currency: 'USD' })
    }

    if (select2.value === "Є Euro" && select.value === "Є Euro") {
        let valorreal = inputReais
        let valordolar = inputReais
        moedareal.innerHTML = valordolar.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })
        moedadolar.innerHTML = valorreal.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })
    }

    if (select2.value === "R$ Real Brasileiro" && select.value === "R$ Real Brasileiro") {
        let valorreal =  inputReais
        let valordolar = inputReais
        moedareal.innerHTML = valordolar.toLocaleString('pe-br', { style: 'currency', currency: 'BRL' })
        moedadolar.innerHTML = valorreal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
    }



}

function trocamoeda() {
    let textoMoedas = document.getElementById("moeda")
    let bandeiramoedas = document.getElementById("bandeiradolar")

    if (select.value === "U$ Dólar Americano") {
        textoMoedas.innerHTML = "Dólar Americano"
        bandeiramoedas.src = "./img/estados-unidos (1) 1.png"

    }

    if (select.value === "Є Euro") {
        textoMoedas.innerHTML = "Euro"
        bandeiramoedas.src = "./img/EURO.png"

    }

    if (select.value === "R$ Real Brasileiro") {
        textoMoedas.innerHTML = "Real"
        bandeiramoedas.src = "./img/brasil 2.png"
    }


}

function trocamoeda2() {

    let bandeiramoedas1 = document.getElementById("bandeira1")
    let textoMoedas2 = document.getElementById("moedas2")

    if (select2.value === "U$ Dólar Americano") {
        textoMoedas2.innerHTML = "Dólar Americano"
        bandeiramoedas1.src = "./img/estados-unidos (1) 1.png"

    }

    if (select2.value === "Є Euro") {
        textoMoedas2.innerHTML = "Euro"
        bandeiramoedas1.src = "./img/EURO.png"

    }
    if (select2.value == "R$ Real Brasileiro") {
        textoMoedas2.innerHTML = "Real"
        bandeiramoedas1.src = "./img/brasil 2.png"
    }
}
    

botao.addEventListener("click", clique)
select.addEventListener("change", trocamoeda)
select2.addEventListener("change", trocamoeda2)


select.addEventListener("change", clique)
select2.addEventListener("change", clique)

