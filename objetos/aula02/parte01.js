// POdemos salvar um array dentro de um onjeto
const cliente = {
  nome: "Joao",
  idade: 24,
  email: "joao@firma.com",
  telefone: ["1155555550", "1144444440"],
};

console.log(cliente.telefone[0]);

//OBJETOS EM OBJETOS
//uma propriedade do objeto vai ter um objeto dentro dela
cliente.endereco = {
  rua: "R. Joseph Climber",
  numero: 1337,
  apartamento: true,
  complemento: "ap 934",
};
console.log(cliente)

//  const cliente ={
//    nome: 'Joao',
//    idade: 24,
//    email: 'joao@firma.com',
//    telefone: [ '1155555550', '1144444440' ],
//    endereco: {
//      rua: 'R. Joseph Climber',
//      numero: 1337,
//      apartamento: true,
//      complemento: 'ap 934'
//   }
//  };

//acessando os campos do objeto dentro do objeto
console.log(cliente.endereco.complemento);