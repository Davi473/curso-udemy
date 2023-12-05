function triangulo(a, b, c) {
    if (a === b && b === c && c === a) {
        console.log(`Esse triângulo é Equilatéro por suas meditas ${a}, ${b} e ${c}`)
    } else if (a === b || b === c || c === a) {
        console.log(`Esse triângulo é Isósceles por suas meditas ${a}, ${b} e ${c}`)
    } else {
        console.log(`Esse triângulo é Escaleno por suas meditas ${a}, ${b} e ${c}`)
    }
}


triangulo(2, 2, 2)
triangulo(2, 2, 3)
triangulo(2, 4, 3)