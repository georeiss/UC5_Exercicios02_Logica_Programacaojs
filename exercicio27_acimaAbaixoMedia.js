let precos = [100, 40, 17, 64];

let valorReferencia = 50;

let acimaReferencia = 0;
let somaAbaixoReferencia = 0;

for (let preco of precos) {
    if (preco > valorReferencia) {
        acimaReferencia++;
    } else {
        somaAbaixoReferencia += preco;
    }
}

console.log("Quantidade de preços acima da referência:", acimaReferencia);
console.log("Soma dos preços abaixo da referência:", somaAbaixoReferencia);