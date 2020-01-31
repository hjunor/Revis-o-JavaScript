const filhas = ['Diana', 'Debora', 'justina', 'Veronica', 'Gabriela', 'Isabel', 'Manoela'];

const filhos = ['Otavio', 'joão', 'Tinoco', 'Gabriel', 'Felipe', 'Carlos', 'David']

const herdeiros = [...filhas,...filhos].sort(); //Array union.

const herdeiros2 = filhas.concat(filhos);//concat Array

console.log(herdeiros);
console.log(herdeiros2);