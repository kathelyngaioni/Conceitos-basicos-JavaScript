//sintaxe de espelhamento ... (spread operator)
const cliente = {
  nome: "Kathelyn",
  idade: 24,
  email: "gaioni.kathelyn@outlook.com",
  telefone: ["32991604821","32991932107"],
};
//enderecos é do tipo objeto
cliente.enderecos = [{
  rua: "José Lourenço Kelmer",
  numero: 1137,
  apartamento: true,
  complemento: "ap 402",
}];

function ligaParaCliente(telefoneComercial,telefoneResidencial){
  console.log(`Ligando para ${telefoneComercial}`);
  console.log(`Ligando para ${telefoneResidencial}`);
}
//as linhas possuem o mesmo comportamento
//ligaParaCliente(cliente.telefone[0], cliente.telefone[1]);
ligaParaCliente(...cliente.telefone);

const encomenda = {
  destinatario : cliente.nome,
  rua : cliente.enderecos[0].rua,
  numero : cliente.enderecos[0].numero,
  apartamento : cliente.enderecos[0].apartamento,
  complemento : cliente.enderecos[0].complemento,
};
console.log(encomenda);

//uma forma mais fácil usando espalhamento:
const Encomenda = {
  destinatario:cliente.nome,
  ...cliente.enderecos[0],
};
console.log(Encomenda);