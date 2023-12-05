function jurosSimples(capital, taxa, tempo) {
    // Fórmula do montante com juros simples
    const montante = capital * (1 + (taxa / 100) * tempo);
    return montante;
}

// Exemplo de uso
const capitalInicial = 1000;
const taxaJurosSimples = 5;
const tempoAplicacao = 2;

const montanteJurosSimples = jurosSimples(capitalInicial, taxaJurosSimples, tempoAplicacao);
console.log(`Montante com juros simples: ${montanteJurosSimples}`);


function jurosCompostos(capital, taxa, tempo) {
    // Fórmula do montante com juros compostos
    const montante = capital * Math.pow(1 + taxa / 100, tempo);
    return montante;
}

// Exemplo de uso
const taxaJurosCompostos = 5;

const montanteJurosCompostos = jurosCompostos(capitalInicial, taxaJurosCompostos, tempoAplicacao);
console.log(`Montante com juros compostos: ${montanteJurosCompostos}`);
