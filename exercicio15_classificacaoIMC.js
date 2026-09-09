function classificarIMC(peso, altura) {
    let IMC = peso / (altura * altura);
    if (IMC < 18.5){
        return"Abaixo do peso"
    }
    else if (IMC <= 24.9){
        return "Peso normal"
    }
    else if (IMC <= 29.9){
        return "Sobrepeso"
    }
    else {
        return "Obesidade"
    }
    
}

let total = classificarIMC(64,1.78);
console.log(total);