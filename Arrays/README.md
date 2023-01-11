                  ARRAY
• No caso do Javascript, Array e Lista são a mesma coisa.

• As listas do JavaScript não se restringem a um único tipo de dado. Em um único array, podemos ter o valor 10 , uma string "oi" e um valor true e outro false (booleanos). É possível colocar todos esses valores em uma mesma lista, apesar de não ser comum.

• push() : inserir no final elementos no array
• unshift(): insere no início 
• pop() : remove o ultimo elemento
• shift() : remove o primeiro elemento

•splice() :  Remover e incluir novos elementos em um array. O splice altera o array original.

•includes()  retorna true ou false, dependendo se o valor passado como parâmetro está presente ou não no array.

•indexOf() : retorna a posição no array do valor passado como parâmetro

• No Javascript é a mesma coisa
Atribuição via desestruturação
 const [alunos,medias] =listaDeAlunoEMedias;
 alunos = listaDeAlunosEMedias[0];
 medias= listaDeAlunosEMedias[1];

 Desestruturar um array: criar várias novas variáveis ao mesmo tempo a partir dos elementos de um array.

• for of : O for of é uma forma mais concisa de escrever o for tradicional, mas depende da situação. Ele funciona em casos que precisamos percorrer uma lista do início ao fim, passando por todos os elementos.

• Enquanto o método forEach não tem um retorno, o método map() pode retornar um array se a função callback retornar algum valor.

• O método reduce() está trabalhando com dois parâmetros. O primeiro é a função callback obrigatória para retornar o cálculo e o segundo parâmetro é um número que representa o valor inicial do acumulador.