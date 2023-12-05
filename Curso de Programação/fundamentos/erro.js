function tratarErroELancar(erro) {
    //throw new Error("...")
    //throw 10
    //throw true
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj) {
    try {
    console.log(obj.name.toUpperCase() + "!!!")
    } catch (e) {
        tratarErroELancar(e)
    } finally {
        console.log("final")
    }
}

// tentar evita mostra a estrutura para o usuario, erro em linguaguem diferentes e erros crus

const obj = { nome: "Roberto" }
imprimirNomeGritado(obj)