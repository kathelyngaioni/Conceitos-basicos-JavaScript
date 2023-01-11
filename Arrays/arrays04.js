// map é útil quando queremos reescrever arrays.
// map tambem recebe uma função callback
//O map NÂo altera o array original

const notas = [10,9.5,8,7,6];
//posso usar dois parametros ou apenas um
const novasNotas = notas.map((nota) => {
  return (nota + 1 >= 10 ? 10 : nota + 1);
})

console.log(novasNotas);

const nomes = ["ana Julia","Caio vinicius","BIA silva"];

const nomesPadronizados = nomes.map((nome)=> {
  return nome.toUpperCase();
})

console.log(nomesPadronizados);

// outra opção nas arrow function:
// const nomesPadronizados = nomes.map((nome)=> nome.toUpperCase();
// })