//cada propriedade do objeto é separada por vírgula
// par chave e valor
// nome e idade são as chaves do objeto objPessoa

const objPessoa = {
  nome : "José",
  idade: 32
};

const Cliente = {
  nome: "André",
  idade: 32,
  CPF : "1234567",
  email: "andre@dominio.com"
};
console.log(`O nome do cliente é ${Cliente.nome}`);

console.log(`Os 3 primeiros digitos do cliente ${Cliente.nome} são: ${Cliente.CPF[0]}${Cliente.CPF[1]}${Cliente.CPF[2]}`);

//substring
console.log(`Os 3 primeiros digitos do cliente ${Cliente.nome} são: ${Cliente.CPF.substring(0,3)}`);

//---------------------------------------------------------------------
console.log("-----------------------------------------------------------");
//Acessando propriedades do objeto usando colchetes:
console.log(Cliente["nome"]);

const chaves = ["nome", "idade", "cpf", "email"];

chaves.forEach((chave) => {
  console.log(`A chave ${chave} tem valor ${Cliente[chave]}`);
});