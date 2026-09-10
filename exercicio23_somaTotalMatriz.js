let numeros = [
    [5, 7, 6],
    [10, 50, 80],
    [8, 9, 2]
]
let soma = 0;
for (let linha = 0; linha < numeros.length; linha++) {

    for (let coluna = 0; coluna < numeros[linha].length; coluna++) {
      soma += numeros[linha][coluna];
   
    }
}
console.log(soma);