// Função em JS é Firt-Class Objet (Citizens)
// Highes-order function (Função de alta ordem)

// Criar um forma literal
function fun1() { }

// Armarzenar em uma variável
const fun2 = function () { }

// Armazenar em uma array
const array = [function (a, b) { return a + b }, fun1, fun2]
console.log(array[0](2, 3))

// Armazenar em um atributo de objeto
const obj = { }  // Array
obj.falar = function () { return "Opa" } // add a função na array
console.log(obj.falar()) // chamando a função na array


// Passar função como param
function run(fun) {
    fun()
}

run( function () { console.log("Executando...") })

// Uma função pode retornar/conter um função
function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}

soma(2, 3)(4)
// ou
const cincoMais = soma(2, 3)
cincoMais(4)