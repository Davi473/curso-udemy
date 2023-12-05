let a = 7;
let b = 94;

console.log("Valores antigos");
console.log("valor de A " + a);
console.log("Valor de B " + b);

// Forma simples de fazer
//let troca = a;
//a = b;
//b = troca;

// forma mais avançada 
[a, b] = [b, a]

// depois da troca ... a = 94 e b = 7
console.log("Valores de trocas");
console.log("valor de A " + a);
console.log("Valor de B " + b);
