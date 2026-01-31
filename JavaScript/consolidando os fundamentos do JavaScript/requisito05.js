/*
Requisito 5: Crie uma função que receba uma frase como parâmetro e retorne um array
contendo as palavras que compõem essa frase, separadas por espaços.
Função: dividirFrase
*/

let frase = "Esta é uma frase de exemplo.";

let result = dividirFrase(frase);

function dividirFrase(frase){
    return frase.split(" ");
};

console.log(result);