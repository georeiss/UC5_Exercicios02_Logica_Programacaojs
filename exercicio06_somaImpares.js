let numero = 1;
let total = 0;

while (numero <= 20) {

    if (numero % 2 === 1) {
        total = total + numero;
    }

    numero++;
}

console.log(total);