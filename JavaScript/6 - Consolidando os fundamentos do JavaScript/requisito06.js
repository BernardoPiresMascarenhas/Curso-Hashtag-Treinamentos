/*
Requisito 6: Crie uma função que receba o número de vitórias e empates de um time e
retorne a quantidade total de pontos, sabendo que cada vitória vale 3 pontos e cada empate
vale 1 ponto.
Função: calcularPontos
*/

const vitoriaPontos = 3;
const empatePontos = 1;

let vitoria = 5;
let empate = 2;

let result = calcularPontos(vitoria, empate, vitoriaPontos, empatePontos);

function calcularPontos(vitoria, empate, vitoriaPontos, empatePontos){
    return (vitoria * vitoriaPontos) + (empate * empatePontos);
};

console.log(result);