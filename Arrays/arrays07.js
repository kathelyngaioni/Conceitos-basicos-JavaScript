const notas = [7, 7, 8, 9];

//Uma atribuição de um array é chamada de atribuição por referência, pois nela é passada a referência do array em si, e não uma cópia de seu valor.
//logo, modificando novasNotas eu também estou modificando notas
//Porém, esse comportamento não acontece com strings, números e booleanos, que são tipos primitivos do JavaScript.
const novasNotas = notas;

novasNotas.push(10);

console.log(`As novas notas são ${novasNotas}`);
console.log(`As notas originais são ${notas}`);


//spread operator (...)

const _notas = [7, 7, 8, 9];

const _novasNotas = [5,..._notas, 10];

console.log(`As novas notas são ${_novasNotas}`);
console.log(`As notas originais são ${_notas}`);


const arrayOriginal = [7, 7, 8, 9];

function alteraArray(array) {
  array.push(10);

  console.log(`array do parâmetro é ${array}`);
  console.log(`arrayOriginal é ${arrayOriginal}`);
}
//arrayOriginal passado como parametro dessa forma para se passar por cópia e não por referencia.
alteraArray([...arrayOriginal]);

