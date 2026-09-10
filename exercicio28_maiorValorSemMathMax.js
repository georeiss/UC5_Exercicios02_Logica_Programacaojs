function maiorValor(numeros){
    let maiorNumero = 0;

    for (let numero of numeros){
        if (numero > maiorNumero){
            maiorNumero = numero;
        }
    }
    return maiorNumero;
}

console.log(maiorValor([100, 75, 40]));