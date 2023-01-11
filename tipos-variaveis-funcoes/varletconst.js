//var
var altura1 = 5
var comprimento1 = 7
area1 = altura1 * comprimento1
console.log(area1)
//eu posso declarar a variavel area depois
var area1

//let
//no let nao da para declarar a variavel area depois de usa-la como fizemos no var
let forma2 = "retangulo"
let altura2 = 5
let comprimento2 = 7
let area2
if(forma2 === "retangulo")
  area2 = altura2 * comprimento2
else
  area2 = (altura2*comprimento2)/2
console.log(area2)

//const
//não é possivel apenas declarar uma variavel const
//precisamos inicializa-la
// se so usamos a variavel area sem declarar, essa variavel é var
const forma3 = "quadrado"
const altura3 = 5
const comprimento3 = 7
let area3;

if(forma3 === "quadrado")
  area3 = altura3 * comprimento3
else
  area3 = (altura3*comprimento3)/2
console.log(area3)