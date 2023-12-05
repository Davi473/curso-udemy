let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo) // !false  !!verdadeiro

console.log("\nos verdadeiros...\n")
console.log(!!3)
console.log(!!-1)
console.log(!!" ")
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log("\nos falsos...\n")
console.log(!!0)
console.log(!!"")
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log("\npra finalizar...\n")
console.log(!!("" || null || 0 || " ")) // fala se tem algum valor verdadeiro

let nome = "Lucas"
console.log(nome || "Desconhecido") // mostra o primeiro valor verdadeiro
