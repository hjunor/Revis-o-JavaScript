//Array e suas denotações de Object
const quaseArray = { 0:'Rafael', 1: 'Ana', 2:'Bia', 3:'Claudia' }
console.log(quaseArray);
// ? { '0': 'Rafael', '1': 'Ana', '2': 'Bia', '3': 'Claudia' }

// Essa função mostras as propriedades do array como objeto
    Object.defineProperty(quaseArray, 'toString', {
        value: function(){return Object.values(this)},
        enumerable: false
    });

    console.log(quaseArray[0]);
// ? Rafael
    const meuArray = ['Rafael', 'Ana', 'Bia', 'Claudia'];

    console.log(quaseArray.toString(), meuArray)
// ? [ 'Rafael', 'Ana', 'Bia', 'Claudia' ] [ 'Rafael', 'Ana', 'Bia', 'Claudia' ]
//Praticamente igual.