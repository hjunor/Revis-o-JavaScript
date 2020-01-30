const alunos = [
    {nome: 'João', notas:7.9},
    {nome: 'joão', notas:9.2}
]

//imperativo


let total = 0;

for (let i = 0; i < alunos.length; i++){
    total += alunos[i].notas
}

console.log(total / alunos.length); // retorna a media dos alunos.

//declarativo

const total2 = alunos.map(e => e.notas).reduce((a,e) => (a+e)/alunos.length); // retorna a media dos alunos.

console.log(total2);