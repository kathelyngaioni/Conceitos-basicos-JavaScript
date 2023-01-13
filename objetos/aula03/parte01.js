//como iterar dentro de um objeto

const cliente = {
  nome: "Kathelyn",
  idade: 24,
  email: "gaioni.kathelyn@outlook.com",
  telefone: "32991604821",
};
//enderecos é do tipo objeto
cliente.enderecos = [{
  rua: "José Lourenço Kelmer",
  numero: 1137,
  apartamento: true,
  complemento: "ap 402",
}];

// palavra reservada IN
for( let chave in cliente){
  console.log(`A chave ${chave} tem valor ${cliente[chave]}`);
  //A chave enderecos tem valor [object Object]
  //comportamento do Javascript
}

//typeof retorna uma string com o tipo da função

for (let Chave in cliente) {
  let tipo = typeof cliente[Chave];
  if (tipo !== "object" && tipo !== "function") {
    console.log(`A chave ${Chave} tem o valor ${cliente[Chave]}`);
  }
}