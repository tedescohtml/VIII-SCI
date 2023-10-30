function gebi(id) {
    return document.getElementById(id)
}

var totalInscritos = 100
gebi("numeroParticipantes").value = totalInscritos

localStorage.setItem("total_inscritos", totalInscritos.toString());
if (localStorage.getItem("total_inscritos")) {
    var totalInscritos = localStorage.getItem("total_inscritos");
    totalInscritos = parseInt(totalInscritos, 10);
    console.log("Número de participantes: " + totalInscritos);
}else{
    console.log("A chave 'total_inscritos' não está no LocalStorage.");
}

function multiplicarCafe() {
    let valorN1 = parseInt(gebi("qtdaCafe").value)
    let valorN2 = parseInt(gebi("precoCafe").value)
    let totalCafe = valorN1 * valorN2
    gebi("totalCafe").value = totalCafe
}

function multiplicarBolo() {
    let valorN3 = parseInt(gebi("qtdaBolo").value)
    let valorN4 = parseInt(gebi("precoBolo").value)
    let totalBolo = valorN3 * valorN4
    gebi("totalBolo").value = totalBolo
}

function multiplicarCachorro() {
    let valorN5 = parseInt(gebi("qtdaCachorro").value)
    let valorN6 = parseInt(gebi("precoCachorro").value)
    let totalCachorro = valorN5 * valorN6
    gebi("totalCachorro").value = totalCachorro
}

function multiplicarBanner() {
    let valorN7 = parseInt(gebi("qtdaBanner").value)
    let valorN8 = parseInt(gebi("precoBanner").value)
    let totalBanner = valorN7 * valorN8
    gebi("totalBanner").value = totalBanner
}

function multiplicarCracha() {
    let valorN9 = parseInt(gebi("qtdaCracha").value)
    let valorN10 = parseInt(gebi("precoCracha").value)
    let totalCracha = valorN9 * valorN10
    gebi("totalCracha").value = totalCracha
}

function multiplicarCamiseta() {
    let valorN11 = parseInt(gebi("qtdaCamiseta").value)
    let valorN12 = parseInt(gebi("precoCamiseta").value)
    let totalCamiseta = valorN11 * valorN12
    gebi("totalCamiseta").value = totalCamiseta
}


/*function () {
let numberN1 = gebi("numeroParticipantes").value
let numberN2 = gebi("qtdaCafe").value 
let numberN3 = gebi("precoCafe").value 
let numberN4 = gebi("qtdaBolo").value 
let numberN5 = gebi("precoBolo").value 
let numberN6 = gebi("qtdaCachorro").value 
let numberN7 = gebi("precoCachorro").value 

let numberN8 = gebi("qtdaBanner").value 
let numberN9 = gebi("precoBanner").value 
let numberN10 = gebi("qtdaCracha").value 
let numberN11 = gebi("precoCracha").value 
let numberN12 = gebi("qtdaCamiseta").value
let numberN13 = gebi("precoCamiseta").value*/
