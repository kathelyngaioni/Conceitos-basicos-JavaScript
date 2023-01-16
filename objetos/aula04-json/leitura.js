const dados = require("./cliente.json");

console.log(dados);
console.log(typeof dados);

//uma forma de tranformar objeto em string: "Stringficação"
const clienteEmString = JSON.stringify(dados);
console.log(clienteEmString);
console.log(typeof clienteEmString);

//processo inverso: tranformar string em objeto
const clienteEmObjeto = JSON.parse(clienteEmString);
console.log(clienteEmObjeto);
console.log(typeof clienteEmObjeto);