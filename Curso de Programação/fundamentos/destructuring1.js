// novo recurso do ES2015

const pessoa = {
    nome: "Ana",
    idade: 5,
    endereco: {
        logradouro: "Rua ABC",
        numero: 1000
    }
}

const { nome, idade } = pessoa  
console.log(nome, idade)

const { nome: n, idade: i } = pessoa
console.log(n, i)

const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada) 

const { endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep)

 //const { conta: { ag, num } } = pessoa // como o pai(conta) não exite da erro
 //console.log(ag, num)                  // so pode chama algum elemento q n existe quando o elemento for filho

 // destructuring em objeto