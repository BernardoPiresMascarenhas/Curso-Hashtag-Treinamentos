/*
Requisito 9: Crie uma função que receba um array de números e retorne a média desses
números.
Função: calcularMedia
*/

let array = [10, 20, 30, 40];

let result = calcularMedia(array);

function calcularMedia(array){
    let soma = 0;
    for(let i = 0; i < array.length; i++){
        soma = soma + array[i];
    }

    return soma / array.length;
}

console.log(result);