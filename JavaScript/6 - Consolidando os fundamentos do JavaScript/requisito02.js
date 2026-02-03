/*
Requisito 2: Crie uma função que receba um array de nomes e retorne esse array ordenado
em ordem alfabética. Função: ordenarNomes
*/

let arrayNomes = ['Ana', 'Elias', 'Carlos', 'Beatriz'];

let result = ordenarNomes(arrayNomes);

function ordenarNomes(arrayNomes){
    return arrayNomes.sort();
};

console.log(result);