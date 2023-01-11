//ARROW FUNCTION
//ES6
//não pode ser nomeada
//Hosting : arrow function se comporta como expressão
//arrow function não é possivel chamar antes da declaração

function Apresentar(nome){
  return `Meu nome é ${nome}`
}
// (nome) é opcional porque eu tenho apenas um parâmetro
const apresentarArrow = nome => `Meu nome é ${nome}`
console.log(apresentarArrow("Kathelyn"))

// Como nessa função eu tenho dois parâmetros eu preciso do ()
             //parâmetros    //return
const soma = (num1,num2) => num1 + num2

const NumerosPequenos = (num1 , num2) =>{
  if(num1 > 10 || num2 > 10)
    return "Somente numeros de 1 a 9";
  else
    return num1 + num2
}