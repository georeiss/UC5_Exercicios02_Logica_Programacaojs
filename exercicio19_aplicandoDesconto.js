let precos = [200, 50, 600];

let desconto = [0.10];
let precoComDesconto = []; 

for (let preco = 0; preco < precos.length; preco++){
    precoComDesconto[preco] = precos[preco] - (precos[preco] * desconto[0]);
}
console.log("Preço normal: " + precos);
console.log("Preço com desconto: " + precoComDesconto);
