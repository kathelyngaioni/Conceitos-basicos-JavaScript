// DECLARAÇÃO DE FUNÇÃO
function imprimeTexto(Texto){
  console.log(Texto)
}
imprimeTexto("oi")
imprimeTexto("outro texto")

function cumprimentaPessoa(pessoa){
 console.log(`oi, ${pessoa}!`)
}
cumprimentaPessoa('Helena')

function cumprimentar(){
 return 'Oi gente!'
}

function cumprimentaPessoa(nomePessoa) {
 console.log(`${cumprimentar()} Meu nome é ${nomePessoa}`)
}
cumprimentaPessoa('Paula') // “Oi gente! Meu nome é Paula”

//Não é errado escrever coisas depois do return porém essas coisas não serão executadas

function Soma(numero1,numero2){
  return  numero1+ numero2
}

function Multiplica(numero1 , numero2){
  return numero1 * numero2
}
console.log(Multiplica(Soma(4,5) , Soma(3,3)))

//NaN
console.log(Multiplica(Soma(4,5)))

//A opção para não dar o NaN é
function Multiplica2(numero1 = 1 , numero2 = 1){
  return numero1 * numero2
}
console.log(Multiplica2(Soma(4,5)))


// Como não foi passado nenhum parâmetro : UNDEFINED
function comParametro(param) {
    console.log(param)
}
comParametro()
//-------------------------------------------------------------------------
//_________________________________________________________________________
//EXPRESSAO DE FUNCAO
//é importante que essa função seja const
//a nossa função não tem um nome
//função anonima
const soma = function(num1 , num2) {return num1 + num2}
console.log(soma(2,3))

//-----------------------------------------------------//
console.log(Apresentar())

function Apresentar(){
  return "Olá"
}
//---------------------------------------------------------
//Dessa forma da erro
console.log(soma2(1,1))
const soma2 = function(num1 , num2) {return num1 + num2}
//Quando fizemos a declaração de soma com o const, ela se comporta igual uma variável. E como uma variável no JavaScript, nós não podemos usar ela, a não ser que já tenhamos iniciado ela alguma vez.
//A exceção disso é o caso das funções que declaramos com um nome ou as var. 