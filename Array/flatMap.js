const escola = [
    {nome: 'Turma M1', alunos:[
        {nome:'Gustavo', nota :8.1},
        {nome:'Ana',nota:9.3}
    ]},
    {nome: 'Turma M2', alunos:[
        {nome:'Rebeca', nota :8.9},
        {nome:'Roberto',nota:7.3}
    ]}
]

const getNotaAluno = aluno => aluno.nota;
const getNotaTurma = turma => turma.alunos.map(getNotaAluno);

const notas = escola.map(getNotaTurma);
console.log(notas);

console.log([].concat(notas[0],notas[1])); // o uso de paramentros é indiferencial é não funcional

Array.prototype.flatMap = function(Callback){ //assim o metodo flatMap  é mais efetivo. 
    return Array.prototype.concat.apply([],this.map(Callback))
}

const notas2 = escola.flatMap(getNotaTurma)
console.log(notas2);