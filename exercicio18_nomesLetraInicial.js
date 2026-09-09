let nomes = ["Jennifer", "Britney", "Andre", "Kurt", "Bruce", "Shirley"];

for (let contador = 0; contador < nomes.length; contador++) {
    let letraInicial = nomes[contador][0] === "B";
    if (letraInicial) {
        console.log(nomes[contador]);
    }
}