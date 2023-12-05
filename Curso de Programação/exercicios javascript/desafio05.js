function reais (a, b) {
    soma = (a + b).toFixed(2)
    soma = soma.toString().replace(".", ",")
    console.log(`R$${soma}`)
}

reais(0.1, 0.2)

reais(2, 5)