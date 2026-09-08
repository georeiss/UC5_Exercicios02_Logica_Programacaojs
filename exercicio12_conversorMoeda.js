function converterParaDolar(valorEmReais) {
    let cotacaoFixa = 5;
    return valorEmReais / cotacaoFixa;
}

let total = converterParaDolar(50);
console.log(total + " dólares");