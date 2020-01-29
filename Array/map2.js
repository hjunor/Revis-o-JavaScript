const carrinho = [
    '{"nome":"Borracha", "preco":3.45}',
    '{"nome":"Caderno", "preco":13.19}',
    '{"nome":"Kit de lapis", "preco":41.22}',
    '{"nome":"Caneta", "preco":7.50}',
]

const preco = carrinho.map(function(e){
    let valor = JSON.parse(e)
    return valor.preco;
})

console.log(preco)

