♡ var, let e const

O var, como ele foi criado no começo do JavaScript quando não existia let e const, era a única opção e todo mundo só podia usar var, então, pode ser que algumas documentações mais antigas ainda utilizem essa forma. Hoje em dia, a var não é mais utilizada, justamente, porque ela é muito propensa à bugs, então, usamos o let, quando sabemos que o valor da variável vai precisar mudar, vai precisar ser reatribuído; para todos os outros casos, vocês podem usar const, sempre.

♡ truthy---falsy

Existem alguns outros valores de variáveis que não são nem true nem false, mas, que para o JavaScript, eles equivalem a ser tipo verdadeiro ou tipo falso, ou como costumamos dizer, truthy ou falsy.

• Type of É uma palavra chave que serve para perguntarmos ao JavaScript qual é o tipo de dado que está sendo guardado nessa variável.

• Bug Null


♡ Conversão Implicita e Conversão Explicita

• Number() • String() • toString() • +

Apesar do JavaScript fazer a maioria das conversões de forma correta, problemas podem aparecer, então é sempre bom fazer as conversões de forma explícita. Não é comum usar o operador de soma para fazer a conversão para números, mas este uso é possível. Conversões de booleanos não costumam ser muito usados, mas são possíveis.


♡ Tipos Primitivos
• NaN • Infinity • null e undefined • length • toLowerCase() • Codificação de caracteres

Diferente de outras linguagens de programação como Java ou Python, divisão por zero no JavaScript não gera um erro. O retorno desta operação é infinito ou infinito negativo (Infinity). Porém, a divisão de zero por zero resulta num NaN (not a number).

♡ Template Literal

O template string surgiu para facilitar a questão de concatenação, porque, dependendo da quantidade de variáveis que você quer juntar, tudo começa a ficar muito embolado.

A notação ${} permite a inserção de valores de variáveis dentro de uma string de texto.

♡ Hoisting - Função 
O JavaScript antes de fazer qualquer coisa no código, ele lista as funções que são declaradas e o que é declarado como var, e antes de começar qualquer coisa, ele já sabe o que é. Então, por isso que funciona se chamarmos a função declarada antes dela existir, como no exemplo da função (const soma2)

