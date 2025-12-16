// Filter 
// Observação: Filter sempre vai retornar um array com a mesma quantidade de elementos ou menos

//Exemplo 1
// Primeiro resolva o exercicio abaixo sem usar o filter
// Retorne em outro array os números maiores que 10

// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
// const novoArray = [];

// numeros.forEach(element => {
//     if (element > 10){
//         novoArray.push(element);
//     }
// });

// console.log(novoArray);

// Filter 
// Retorne em outro array os números maiores que 10

// const todosNumeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// //Chamado via arrow function
// const  numeroFiltrados = todosNumeros.filter(valor => valor > 10);
// console.log(numeroFiltrados)

//Exemplo 2
// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo nome termina com a
const pessoas = [
    { nome: 'Luiz', idade: 62},
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Leticia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
]

const pessoas5 = [];

pessoas.forEach(element => {
    
    console.log('Verificando nomes com 5 letras ou mais')
    if (element.nome.length >= 5){
        pessoas5.push(element);
    }

    console.log('Verificando idade acima de 50')
    if (element.idade > 50){
        pessoas5.push(element);
    }


    console.log('Verificando nomes terminados em A')
        if (element.nome.length-1 == 'a'){
        pessoas5.push(element);
    }
});

