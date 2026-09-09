let numeros = [23, -50, 12, 13, -2, -7, 8, 60, -4, -6];

for (let numero = 0; numero < numeros.length; numero++) {
    let negativo = numeros[numero] < 0;
        if (negativo) {
        console.log(numeros[numero]);
        }
    }
