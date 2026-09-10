const prompt = require('prompt-sync')();

let numeroSecreto = 30;
let tentativas = 0;

while (tentativas < 5) {
    let palpite = Number(prompt("Você tem 5 tentativas, digite um número: "));
    tentativas++;

    if (palpite < numeroSecreto) {
        console.log("O palpite foi menor que o numero secreto");
    } else if (palpite > numeroSecreto) { 
        console.log("O palpite foi maior que o numero secreto");
    } else {
        console.log("Você acertou o número secreto!");
        break;
}
}
