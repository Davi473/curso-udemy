function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0

while (opcao != -1) { // enquanto opcao for diferente de -1 o ciclo se repete  
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhido for ${opcao}`)
}

console.log("Até a proxima!")