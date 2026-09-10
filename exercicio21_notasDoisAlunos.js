let notas = [
    [9, 5, 8],
    [5, 10, 7],
];

for (let linha = 0; linha < notas.length; linha++){

    let soma = 0;

for (let coluna = 0; coluna < notas[linha].length; coluna++){
        soma = soma + notas[linha][coluna];
    }

    let media = soma / notas[linha].length;
    console.log(media);
    
}

