let fichaCarro = {
    marca: "Volkswagen",
    modelo: "Santana",
    ano: 2002
}

for (let chave in fichaCarro){
    console.log(chave + ":" + fichaCarro[chave]);
}