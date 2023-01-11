//declaração

//array vazio
const arrayVazia = [];

const notas = [10, 6.5, 8, 7.5]
const media = (notas[0]+notas[1]+notas[2]+notas[3]) / notas.length
console.log(`A média das notas é ${media}`)

// O array está declarado como const mas eu posso altera-lo com alguns dos métodos dele mesmo
const notas2=[10, 6, 8]
notas2.push(7)
//é possivel imprimir o array dessa maneira sem precisar percorrer e imprimir cada item
console.log(notas2)
notas2.pop()
console.log(notas2)


//concat()
const arrayOriginal = ["Maria", "Carlos", "Eduardo", "Samanta"]
const arrayConcat = arrayOriginal.concat("André", "Fernanda")

console.log(arrayConcat)
console.log(arrayOriginal)


const nomes = ["João", "Ana", "Caio", "Lara", "Marjorie", "Leo"];
//o primeiro parâmetro é o índice que queremos remover
//o segundo parâmetro é a quantidade de itens que queremos remver a partir desse item.
//o terceiro parâmetro do splice é para adicionar na lista
//estou removendo a Ana e o Caio
nomes.splice(1,2,"Rodrigo")
console.log(nomes)

//Uma lista pode conter outras listas:
const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];
const listaDeAlunosEMedias = [alunos, medias];
console.log(listaDeAlunosEMedias)
console.log(`A aluna da posição 1 da lista de alunos é: ${listaDeAlunosEMedias[0][1]}.`) //Juliana