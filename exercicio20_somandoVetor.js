function somarVetor(numeros){
    let soma = 0;
    for (let contador = 0; contador < numeros.length; contador++) {
        soma += numeros[contador];
    }
    return soma;

}

let total = somarVetor([15, 78, 30, 36, 11]);
console.log(total);