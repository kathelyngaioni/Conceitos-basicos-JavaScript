//CONVERSÃO IMPLICITA
const numero = 456
const numeroString = "456"

console.log(numero == numeroString)

//os três iguais compararam não só o valor, mas, também o tipo.
console.log(numero === numeroString)

//tranformou o conteudo da variavel numero em uma string
console.log(numero + numeroString)

//CONVERSÃO EXPLICITA
//para converter NÂO usa numero.String() ou numeroString.Number()
console.log(typeof String(numero))
console.log(typeof Number(numeroString))

//toString() parecida com o C++
let telefone = 12341234;
console.log("O telefone é " + telefone.toString())

//Se eu tentar converter uma string que não contém só número, contém, por exemplo, algarismo, ele vai dar um Not a Number(NaN).
let senha = Number("Minhasenha1234")
console.log(senha)

//Podemos usar o operador de soma + para fazer a conversão de textos para números, colocando-os antes das variáveis
let largura = "10";
let altura = "5";
console.log( + largura * + altura); // teremos a conversão de String para números realizado usando o + antes das variáveis