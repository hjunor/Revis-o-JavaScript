const alunos = [
    {nome:'João',nota: 7.3, bolsista:false},
    {nome:'Maria',nota: 9.2, bolsista: true},
    {nome:'Pedro',nota: 9.8, bolsista:false},
    {nome:'Ana',nota: 8.7, bolsista:true},
]

const resultado = alunos.map(e => e.bolsista ).reduce((a,e)=> a && e);
console.log(resultado);

const resultado2 = alunos.map(e => e.bolsista ).reduce((a,e)=> a || e);
console.log(resultado2);