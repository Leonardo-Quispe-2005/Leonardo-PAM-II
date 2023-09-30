//Aqui estão as três maneiras de declarar variavel
let variavelLet = "Olá"  //mais focada - sempre usaremos let para ser unica em uma determinada função - tentar sempre usar está
var variavelVar = 2//mais ampla
const variavelConst = 3 //constante - possui um escopo muito maior - ela estará visivel para todo o sistema - porém ela é imutavel

console.log(variavelLet)
console.log(typeof variavelLet) //typeof mostra o tipo da variavel

variavelLet = "Olá mundo"
console.log(variavelLet + variavelVar)
console.log(variavelLet , variavelVar) // usar virgula para concatenar é melhor do que usar o +

console.log(variavelVar)

console.log(variavelConst)

console.log(variavelVar + variavelConst)

//variavelConst = 6 // eu não posso mudar o valor da constante
//console.log(variavelVar + variavelConst)


//O JS é uma linguagem fracamente tipada - ou seja ela tem a maior liberdade em migrar de number para string e etc

//O java é uma linguagem onde é fortemente tipada - esta aqui possui uma regra, se a variavel for int o valor devera ser int diferente do JS

//Aprender TypeScript - temos a influencer Glaucia Lemos - ela ensina muito sobre o TypeScript
