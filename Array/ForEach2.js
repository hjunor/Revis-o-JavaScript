//Função prototype para simulação de forEach
Array.prototype.forEach2 = function(callback){
    for(let i =0; i < this.length; i++){
       callback(this[i], i, this)
    }
}
 

const aprovados = ['Agatha', 'Aldo', 'Daniel','Raquel']// Retorna os nomes e indices.
aprovados.forEach2((nome,indice, array) => {
    console.log(`${indice+1})  ${nome}`)
});