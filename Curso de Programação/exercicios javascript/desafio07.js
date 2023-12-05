function calcularBhaskara(ax2, bx, c) {
    // Calcula o delta
    const delta = Math.pow(bx, 2) - 4 * ax2 * c;

    // Verifica se o delta é negativo
    if (delta < 0) {
        return "Delta é negativo";
    }

    // Calcula as raízes
    const x1 = (-bx + Math.sqrt(delta)) / (2 * ax2);
    const x2 = (-bx - Math.sqrt(delta)) / (2 * ax2);

    // Retorna um vetor com as raízes
    return [x1, x2];
}

// Exemplo de uso
const ax2 = 3;
const bx = -5;
const c = -12;

const resultadoBhaskara = calcularBhaskara(ax2, bx, c);
console.log(resultadoBhaskara);
