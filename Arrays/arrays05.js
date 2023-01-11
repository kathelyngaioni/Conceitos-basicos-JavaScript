//metodo filter
//filter retorna true ou false
//filter recebe como parâmetro uma função callback
const Alunos = ["Ana","Marcos","Maria","Mauro"];
const medias = [ 7, 4.5 , 8 , 7.5]

const reprovados = Alunos.filter((Alunos,indice)=> {
  return (medias[indice] < 7);
  //Quando a função callback retorna verdadeiro, ou true, o elemento é adicionado no array de retorno, e quando ela retorna falso, ou false, o elemento é descartado.
})

const aprovados = Alunos.filter((Alunos,indice)=> {
  return (medias[indice] >= 7);  
})
console.log(`A lista de aprovados ${aprovados}`);