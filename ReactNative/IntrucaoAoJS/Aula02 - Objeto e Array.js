// Nesta aula aprenderemos sobre Objetos e Arrays, ambas muito importantes na programação

const jovem_mistico = { //jovem_mistico é um objeto
    nome: "Meu nome é: Leonardo\n",
    signo: "Meu signo é: Touro\n",
    idade: "Tenho: " + 17 + "anos\n",
    louco: "Sou loko: " + true,
    parentes: ["Modesta", "Lucas"] //Objetos podem ter arrays dentro deles
}

//formato JSON - JS Notation Object
console.log(jovem_mistico.nome,
    jovem_mistico.signo, 
    jovem_mistico.idade, 
    jovem_mistico.louco)

console.log(jovem_mistico)
console.log(typeof jovem_mistico)
console.log(jovem_mistico.parentes[0])//chamando a array dentro do objeto



let pessoa = ["Leonardo", 17, "Desenvolvedor"] // array 
console.log("\n", pessoa[0], pessoa[2]) // chamando um certo dado na array 
console.log(pessoa)
console.log(typeof pessoa)

