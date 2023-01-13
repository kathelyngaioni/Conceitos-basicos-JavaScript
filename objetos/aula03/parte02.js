//método novo que nos retorna um array com todos os nomes das propriedades que foram inicializados

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

//verificando se o cliente tem um endereço
//chavesDoObjeto é um array
const chavesDoObjeto = Object.keys(cliente);
console.log(chavesDoObjeto);

//metodo includes()
console.log(chavesDoObjeto.includes("enderecos"));
