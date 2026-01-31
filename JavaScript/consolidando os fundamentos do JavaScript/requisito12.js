/*
Requisito 12: Crie uma função que receba uma frase e retorne a quantidade de palavras que
ela contém.
Função: contarPalavras
*/

let frase = "Olá, tudo bem?";

let result = contarPalavras(frase);

function contarPalavras(frase){
    let array = frase.split(/[\s,]+/);
    return array.length;
}

console.log(result);