/*
Requisito 8: Crie uma função que receba um array de gastos e retorne a quantidade de vezes
que o maior gasto aparece nesse array.
Função: maiorGasto
*/

let array = [10, 20, 20, 15];       

let result = maiorGasto(array);

function maiorGasto(array){
    let maior = Math.max(...array);
    let sum = 0;

    for(let i = 0 ; i < array.length; i++){
        if(array[i] == maior){
            sum++;
        }
    }

    return sum;
};

console.log("O maior valor do array se repetiu: " + result + " vezes.");