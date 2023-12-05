// forma de fazer fução

let dobro = function (a) {
    return 2* a
}

dobro = (a) => {
    return 2 * a
}

 // função Arrow
dobro = a => 2 * a // return implícito
console.log(dobro(Math.PI))

let ola = function () {
    return "Olá"
}

ola = () => "Olá"
ola = _ => "Olá" // possui um parametro( mas pode ignorar o parametro )

console.log(ola())