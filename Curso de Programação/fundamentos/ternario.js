const resultado = nota => nota >= 7 ? "Aprovado" : "Reprovado"


// tbm da para fazer assim

// const resultado = nota => {
//      return nota >= 7 ? "Aprovado" : "Reprovado"
//}

console.log(resultado(7.1)) // Aprovado
console.log(resultado(6.7)) // Reprovado