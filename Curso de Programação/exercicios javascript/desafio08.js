function avaliarDesempenho(pontuacoes) {
    const pontuacoesArray = pontuacoes.split(" ").map(Number);

    let melhorDesempenho = pontuacoesArray[0];
    let piorJogo = pontuacoesArray[0];

    let recordes = [0, 0]; // [vezesRecorde, numeroPiorJogo]

    for (let i = 1; i < pontuacoesArray.length; i++) {
        if (pontuacoesArray[i] > melhorDesempenho) {
            melhorDesempenho = pontuacoesArray[i];
            recordes[0]++;
        } else if (pontuacoesArray[i] < piorJogo) {
            piorJogo = pontuacoesArray[i];
            recordes[1] = i;
        }
    }

    return recordes;
}

// Exemplo de uso
const pontuacoesString = "10 20 20 8 25 3 0 30 1";
const resultado = avaliarDesempenho(pontuacoesString);
console.log(`Vezes que bateu recorde: ${resultado[0]}`);
console.log(`Número do pior jogo: ${resultado[1] + 1}`);
