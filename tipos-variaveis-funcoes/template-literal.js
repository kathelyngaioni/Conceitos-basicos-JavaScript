const nome = "Ju"
const idade = 2021 - 1981
const cidadeDeNascimento = "São Paulo"

const apresentacao1= "Meu nome é " + nome + ", minha idade é " + idade + "  anos e nasci na cidade de " + cidadeDeNascimento

console.log(apresentacao1)

//tem que usar ``para declarar a string `(acento grave)
const apresentacao2 = `meu nome é ${nome}, minha idade é ${idade} anos e nasci na cidade de ${cidadeDeNascimento}`

console.log(apresentacao2)

//usando o template liteal com operador ternário
const nome2 = "Kathelyn"
const idade2 = 24
const bebidaMaior = "cerveja"
const bebidaMenor= "suco"
const pedido = `${nome2} diz: "por favor, quero beber ${idade2 >= 18 ? bebidaMaior : bebidaMenor}"`
console.log(pedido)