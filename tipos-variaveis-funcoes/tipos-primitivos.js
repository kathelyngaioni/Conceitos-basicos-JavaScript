//Os tipos de JavaScript podem ser divididos em duas categorias: tipos primitivos e tipos de objetos

//NaN - Not a Number
const alura = "Alura"
const PrimeiroNumero = 1
console.log(alura*PrimeiroNumero)

//Infinity (divisão por zero)
var a = 10
var b = 0
console.log(a/b) 

//NaN
var a = 0
var b = 0
console.log(a/b)

//Javascript vai reconhecer ambos os casos como strings
const nome = "Kathelyn"
const sobrenome = 'Gaioni'

//Codificação de caracteres
//Os caracteres \u no início do código são caracteres de escape que usamos para sinalizar ao JavaScript de que estamos falando de códigos Unicode, e não de strings de texto usuais.
const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)

//transformando todos os caracteres em letras minúsculas
//toLowerCase()
const cidade = "belo horizonte";
const input = "Belo Horizonte";

const inputMinusculo = input.toLowerCase();

console.log(cidade === inputMinusculo); // true

//tamanho da string length
//length não usa ()
const senha = "minhaSenha123"
console.log(senha.length) // 13 caracteres

//Tipos null e undefined
//O null é um tipo especial, pois pode ser traduzido como “ausência de valor” 
//undefined também é o valor retornado por uma função que não tem cláusula return
let input = null;
let input2;
console.log(input); // null
console.log(input2); // undefined