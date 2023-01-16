const clientes = require("./clientes.json");

//método find
//se o elemento é encontrado, find retorna imediatamente o valor deste elemento. Caso contrário, find retorna undefined .
function encontrar (lista,chave,valor) {
  return lista.find((item) => item[chave].includes(valor));
}
const encontrado = encontrar(clientes,"nome","Kirby");
console.log(encontrado);

