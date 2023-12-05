// funçoes normais é possivel usar antes de ser declarada 
console.log(soma(3, 4))

// function declaraton
function soma(x,y) {
    return x + y
}

/* 
Esse exemplos de função a baixo, só pode ser usadas
depois de serem declaradas
*/
// function expression 
const sub = function (x, y) {
    return x - y
}
console.log(sub(3, 4))

// named function expression
const mult = function mult(x, y) {
    return x * y
}
console.log(mult(3, 4))
