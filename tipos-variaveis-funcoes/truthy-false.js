// O javascript considera esses dois valores como tipo False
console.log(0 == false)
console.log("" == false)

//null e undefined
let MinhaVar
let varNull = null
console.log(MinhaVar) //undefined
console.log(varNull)  //null

//typeof é uma palavra-chave que a gente usa para perguntar ao Javascript qual é o tipo de dado
let numero = 1
let curso = "Alura"
console.log(typeof numero)
console.log(typeof curso)

//atenção nesse exemplo
console.log(typeof MinhaVar)
console.log(typeof varNull)
//MinhaVar deveria ser criado como null e não como objeto. Ele é alguns dos bugs que tem dentro do JavaScript, que acaba ocorrendo, e que eles não pretendem consertar esses bugs.