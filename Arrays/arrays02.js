//procurando o nome em uma lista

const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

function exibeNomeENota(aluno) {
  if(listaDeAlunosEMedias[0].includes(aluno)){
    console.log(`O ${aluno} está cadastrado.`);

    const indice = listaDeAlunosEMedias[0].indexOf(aluno);
    const mediadoaluno = listaDeAlunosEMedias[1][indice];
    
    console.log(`A média do ${aluno} é ${mediadoaluno}`)
  } else {
    console.log("Aluno não encontrado!")
  }
}

exibeNomeENota("Caio");


//for
const numeros = [100,200,300,400,500];

for(let indice=0;indice<numeros.length;indice++){
    console.log(numeros[indice]);
}

// for of

const notas = [10,6.5,8,7.5];

for(let elemento of notas){
  console.log(elemento);
}
