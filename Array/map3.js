Array.prototype.map2 = function(calback){
   const newArray = [];
   for(let i = 0; i<this.length; i++){
       newArray.push(calback(this[i], i, this));
   }
   return newArray;
}
const carrinho = [
    '{"nome":"Borracha", "preco":3.45}',
    '{"nome":"Caderno", "preco":13.19}',
    '{"nome":"Kit de lapis", "preco":41.22}',
    '{"nome":"Caneta", "preco":7.50}',
]

const preco = carrinho.map2(function(e){
    let valor = JSON.parse(e)
    return valor.preco;
})

console.log(preco)

