function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao 

do {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhido for ${opcao}`)
} while (opcao != -1)

console.log("Até a proxima!")