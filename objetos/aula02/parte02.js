//como ter um array de objeto sendo que esse objeto está dentro de outro objeto
const cliente = {
  nome: "Joao",
  idade: 24,
  email: "joao@firma.com",
  telefone: ["1155555550", "1144444440"],
};

//array de objetos
cliente.enderecos = [
  {
    rua: "R. Joseph Climber",
    numero: 1337,
    apartamento: false,
    complemento: " ",
  },
]
cliente.enderecos.push({
  rua: "José Lourenço Kelmer",
  numero: 137,
  apartamento: true,
  complemento: 402,
}  
)
console.log(cliente.enderecos);

//método filter()
//filter retorna um array
//filtrar apenas apartamentos
const listaApenasApartamentos = cliente.enderecos.filter(
  (endereco) => endereco.apartamento === true
);
console.log(listaApenasApartamentos);