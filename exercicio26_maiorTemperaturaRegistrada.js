let temperaturas = [
    [15, 20, 37],
    [38, 17, 33], 
    [19, 39, 22], 
    [40, 10, 19]  
];

let cidades = ["São Paulo", "Belo Horizonte", "Rio de Janeiro", "Salvador"];

let dias = [1, 2, 3];

let maiorTemperatura = 0;
let cidadeMaior = 0;
let diaMaior = 0;

for (let linha = 0; linha < temperaturas.length; linha++) {
    
for (let coluna = 0; coluna < temperaturas[linha].length; coluna++) {
   
    if (temperaturas[linha][coluna] > maiorTemperatura) {
            maiorTemperatura = temperaturas[linha][coluna];
            cidadeMaior = linha;
            diaMaior = coluna;
            
        }

    }
}

console.log("Maior temperatura:", maiorTemperatura);
console.log("Cidade:", cidades[cidadeMaior]);
console.log("Dia:", dias[diaMaior]);