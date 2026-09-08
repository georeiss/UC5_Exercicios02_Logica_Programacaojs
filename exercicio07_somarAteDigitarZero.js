const prompt = require("prompt-sync")();

let numero = Number(prompt("Digite um numero: "));
let soma = 0;

while (numero !== 0){
    soma = soma + numero
    numero = Number(prompt("Digite um numero: "));

}
console.log(soma);