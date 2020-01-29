const produtos = [
    {nome: 'Notebook', preco:2499, fragil:true},
    {nome: 'iPad Pro', preco:4199, fragil:true},
    {nome: 'Copo de vidro', preco:12.49, fragil:true},
    {nome: 'Copo de Platico', preco:18.99, fragil:false},
];
console.log(produtos.filter(e => e.fragil == true && e.preco > 1000));

console.log(produtos.filter(e => e.fragil == true).filter(e => e.preco >= 1000.0));

