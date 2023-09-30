//Funções no JS

let n1 = 5;
let n2 = 8;


//o console.log é uma funçao e o que está dentro do parenteses é um parametro para essa função
console.log(n1+n2)  //soma 
console.log(n1-n2)  //subtração
console.log(n1*n2)  //multiplicação
console.log(n1/n2)  //divisão
console.log(n1**n2) //exponenciação
console.log(Math.sqrt(n1)) // raiz quadrada - o Math.sqrt é uma função
console.warn("Olá funções")//o console.warn é bom para debugar um código


//criando uma própria função
function soma(numero1, numero2){
//uma das várias sintaxe para criar uma função ou método
    return numero1 + numero2
}
console.log(soma(4, 19))

function subtração(numero1, numero2){
    return numero1 - numero2
}
console.log(subtração(4, 19))

function multiplicação(numero1, numero2){
    return numero1 * numero2
}
console.log(multiplicação(4, 19))

function divisão(numero1, numero2){
    return numero1 - numero2
}
console.log(divisão(4, 19))

function exponenciação(numero1, numero2){
    return numero1 ** numero2
}
console.log(exponenciação(4, 19))

function raiz(numero1){
    return Math.sqrt(numero1)
}
console.log(raiz(4))


const divisao = (v1, v2) => {//função anonima - aqui é uma função dentro de uma variavel
    let msg = ""
    if(v1 > v2){
    let resultado = v1 / v2
    msg = resultado
    return msg
}
msg = "insira um valor para v2 menor"
return msg
}

console.log(divisao(10, 2))
console.log(divisao(2, 20))

const divisaoII = (v1, v2) => {
    if(v1 > v2){
        let resultado = v1 / v2
        return resultado
    }
    return "insira um valor para v2 menor"
}
console.log(divisao(50, 13))
console.log(divisao(13, 40))


