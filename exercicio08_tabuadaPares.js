const prompt = require("prompt-sync")();

let numero = Number(prompt("Digite um numero: "));

for (contador = 1; contador <= 10; contador ++){
    let resultado = numero * contador;
    if (resultado % 2 === 0){
        console.log(resultado);
}
}