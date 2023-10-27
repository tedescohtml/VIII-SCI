function gebi(id) {
    return document.getElementById(id)
}

function multiplicarCafe() {
    let valorN1 = parseInt(gebi("qtdaCafe").value)
    let valorN2 = parseInt(gebi("precoCafe").value)
    let totalCafe = valorN1 * valorN2
    gebi("totalCafe").value = totalCafe
}

/*function () {
let numberN1 = gebi("numeroParticipantes").value
let numberN2 = gebi("qtdaCafe").value 
let numberN3 = gebi("precoCafe").value 
let numberN4 = gebi("qtdaBolo").value 
let numberN5 = gebi("precoBolo").value 
let numberN6 = gebi("qtdaCachorro").value 
let numberN7 = gebi("precoCachorro").value 

let numberN8 = gebi("qtdaQuantidade").value 
let numberN9 = gebi("precoBanner").value 
let numberN10 = gebi("qtdaCracha").value 
let numberN11 = gebi("precoCracha").value 
let numberN12 = gebi("qtdaCamiseta").value
let numberN13 = gebi("precoCamisa").value*/
