//Formas diferentes para pecorrer -->1° Foreach.
//Sem muitos comnentatios de agora em diante...

const aprovados = ['Agatha', 'Aldo', 'Daniel','Raquel']// Retorna os nomes e indices.
aprovados.forEach((nome,indice) => {
    console.log(`${indice + 1})  ${nome}`)
});

console.log('---');

aprovados.forEach((nome, indice, array) => {
    console.log(array[indice]);
    
});

console.log('---');

aprovados.forEach(nome =>{ // Retorna os nomes.
   console.log(nome);
});

console.log('---');

const exibirAprovados = aprovado => console.log(aprovado);

aprovados.forEach(exibirAprovados);
