//Revisão com metodo de Array.
const pilotos = ['Vertel', 'Alonso', 'Raikkonen' , 'Massa'];

//.pop exclui o ultimo elemento do array.
pilotos.pop();
console.log(pilotos);
// ? [ 'Vertel', 'Alonso', 'Raikkonen' ]

pilotos.push('Vestappen');
console.log(pilotos);
// ? [ 'Vertel', 'Alonso', 'Raikkonen', 'Vestappen' ]


// .shift remove o primeiro elemento.
pilotos.shift();
console.log(pilotos);
// ? [ 'Alonso', 'Raikkonen', 'Vestappen' ]


// .unshift adiciona o elemento no inicio do array.
pilotos.unshift('Hamilton');
console.log(pilotos);
// ?  [ 'Hamilton', 'Alonso', 'Raikkonen', 'Vestappen' ]

/*.splice pode adicionar e remover  elementos
 ("antes do indice marcado", "numerode elementos afetados", "elementos adicionados") */
 pilotos.splice(2,0,'Bottas', 'Massa');
 console.log(pilotos);
 // ? [ 'Hamilton', 'Alonso', 'Bottas', 'Massa', 'Raikkonen', 'Vestappen']

pilotos.splice(3,1) // --> o 'Massa' sai do array.
console.log(pilotos)
// ? [ 'Hamilton', 'Alonso', 'Bottas', 'Raikkonen', 'Vestappen' ]