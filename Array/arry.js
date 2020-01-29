//Metodo de criar Arrays.

let aprovado = new Array('Bia', 'carlos','Ana');
console.log(aprovado);

//Metodos de criar Arrays literais.

let aprovados = ['Bia', 'Carlos', 'Ana'];

console.log(aprovados[0]);
console.log(aprovados[1]);
console.log(aprovados[2]);

//Metodo de adicionar padrão.

aprovados[3] = 'Diego';
console.log(aprovados[3]);

//Metodo de adicionar usando o .push() ele adiciona no final do array.

aprovados.push('Vitor')
console.log(aprovados[4]);

//Medindo os tamanhos dos elementos dos Arrays.

console.log(aprovados+' esse arry tem tamanho de '+aprovados.length+' posição');

//Ordenação dos Arrays isso causa uma midificação no array .

aprovados.sort()
console.log(aprovados);

//Metodos de exclução de array.
//
delete aprovados[0];
//Esse metodo não reoderna o array ele apenas elimina o elemento e coloca na oposicao como undefined.
console.log(aprovados[0]); // --> Esta contendo o elemento como undefined.
console.log(aprovados[1]); // --> está contendo o elemento Bia.

aprovados = ['Bia', 'Carlos', 'Ana'];
aprovados.splice(1,1,'Polly');
console.log(aprovados);

//O metodo .splice retira o elemento 1 e adiciona o novo elemento no caso Poly

aprovados.splice(1,1,'Geovani', 'Claudia');
console.log(aprovados);
//Console.log retorna [ 'Bia', 'Geovani', 'Claudia', 'Ana' ]
