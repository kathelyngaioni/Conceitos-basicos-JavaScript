// forEach

const notas = [10,6.5,8,7.5];

//função anonima dentro do forEach
//Essa função anônima foi passada como parâmetro de outra função, o forEach. Quando uma função é parâmetro de outra, chamamos a função passada como callback. Ou seja, essa função anônima também é callback nesse caso.
notas.forEach (function (){
  console.log("OI")
})

notas.forEach (function (nota){
  console.log(nota)
})

// é possível passar mais um parâmetro:
notas.forEach (function (nota,indice){
 // console.log(nota);
  console.log(indice);
})

// formas de usar funções callback

const nomes1 = ["Evaldo","Mari","Camis"];

nomes1.forEach(function (nome){
  console.log(nome);
})

const nomes2 = ["Luis","João","Carlos"];
nomes2.forEach((nome) => {
  console.log(nome);
})

const nomes3 = ["Murilo","Eduardo","Mateus"];
//usando uma função externa
function imprimeNome(nome){
  console.log(nome);
}
nomes3.forEach(imprimeNome);

