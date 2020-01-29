//Formas diferentes para pecorrer -->1° Foreach.
//Sem muitos comnentatios de agora em diante...
const aprovados = ['Agatha', 'Aldo', 'Daniel','Raquel']
aprovados.forEach((nome,indice) => {
    console.log(`(${indice + 1})--> ${nome}`)
});