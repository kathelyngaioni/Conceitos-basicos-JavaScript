//Adicionando, manipulando e alterando propriedades do obejto

const Pessoa = {
  nome : "Luma",
  profissão: "Engenheira",
};

Pessoa.telefone = "32991000147";
console.log(Pessoa["telefone"]);

// como a palavra reservada é const, não podemos reatribuir o objeto inteiro
const novaPessoa = {
  
};
//essa linha dá erro porque Pessoa é constante (const)
//Pessoa = novaPessoa;
//---------------------------------------------------------------------
console.log("-----------------------------------------------------------")
// Para deletar um conjunto chave/valor
const objPersonagem = {
 nome: "Gandalf",
 classe: "mago",
 nivel: "20",
 aliado: {
   nome: "Saruman",
   classe: "mago"
 },
 status: "desaparecido"
}
delete objPersonagem.aliado
delete objPersonagem["status"]

console.log(objPersonagem.aliado) //undefined
console.log(objPersonagem.status) //undefined
// o delete remove do objeto o valor da propriedade, assim como a chave.
console.log(objPersonagem);