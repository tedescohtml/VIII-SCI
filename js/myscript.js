function gebi(id) {
    return document.getElementById(id)
}

localStorage.setItem("total_inscritos", totalInscritos.toString());
if (localStorage.getItem("total_inscritos")) {
    var totalInscritos = localStorage.getItem("total_inscritos");
    totalInscritos = parseInt(totalInscritos, 10);
    console.log("Número de participantes: " + totalInscritos);
} else {
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
function somar() {
    let valorc1 = parseInt(gebi("resultado1").value)
    let valorc2 = parseInt(gebi("resultado2").value)
    let valorc3 = parseInt(gebi("resultado3").value)
    let totalalimentos = valorc1 + valorc2 + valorc3
    gebi("totalalimentos").value = totalalimentos
    let valord1 = parseInt(gebi("resultado4").value)
    let valord2 = parseInt(gebi("resultado5").value)
    let valord3 = parseInt(gebi("resultado6").value)
    let totaldivul = valord1 + valord2 + valord3
    gebi("totaldivul").value = totaldivul
    let valort1 = parseInt(gebi("totalalimentos").value)
    let valort2 = parseInt(gebi("totaldivul").value)
    let total1 = valort1 += valort2
    gebi("somatotal").value = total1
}

function moedas() {
    let dolar1 = gebi("totalalimentos").value
    let dolar2 = gebi("totaldivul").value
    let dolar3 = gebi("somatotal").value
    let euro1 = gebi("totalalimentos").value
    let euro2 = gebi("totaldivul").value
    let euro3 = gebi("somatotal").value
    let rstdolar1 = dolar1 / 5.05
    let rstdolar2 = dolar2 / 5.05
    let rstdolar3 = dolar3 / 5.05
    let rsteuro1 = euro1 / 5.31
    let rsteuro2 = euro2 / 5.31
    let rsteuro3 = euro3 / 5.31
    gebi("dolar1").value = "$" + rstdolar1
    gebi("dolar2").value = "$" + rstdolar2
    gebi("dolar3").value = "$" + rstdolar3
    gebi("euro1").value = "€" + rsteuro1
    gebi("euro2").value = "€" + rsteuro2
    gebi("euro3").value = "€" + rsteuro3

}

function montar() {
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
    let numberN13 = gebi("precoCamiseta").value
    let pdrDivul = gebi("totaldivul").value
    let pdrTotal = gebi("somatotal").value
    
    gebi('texto').value = "O evento contando com " + inscritos + " inscritos vendeu " + qtdCafe + " cafés rendendo R$" + totalCafe + ", vendeu " + qtdBolo + " bolos rendendo R$" + totalBolo
        + ", vendeu " + qtdHotdog + " cachorros-quentes  rendendo R$" + totalHotdog + ",  vendeu " + qtdBanner + " benners rendendo R$" + totalBanner + ", vendeu" + qtdCracha + " crachás rendendo R$"
        + totalCracha + ", vendeu " + qtdCamiseta + " camisetas rendendo R$" + totalCamiseta + "." + "O evento lucrou R$" + pdrAlimentos + " com alimentos" + ", com divulgação lucrou "
        + pdrDivul + " ao total lucrou R$" + pdrTotal + " - feito por Allan F.Fantin e Arthur Gaio - "
}


function recuperar() {
    var total = localStorage.getItem('inscritos');
    if (total !== null) {
        alert('Total de inscritos: ' + total);
    } else {
        total = prompt('Digite o total de inscritos: ');
        localStorage.setItem('inscritos', total);
    }
    document.getElementById('inscritos').value = total;
}

