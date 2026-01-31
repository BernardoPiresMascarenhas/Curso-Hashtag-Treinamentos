/*
Requisito 3: Crie uma função que receba dois valores e retorne verdadeiro se ambos forem
considerados "truthy".
Função: compararValores
*/

let valor1 = 5;
let valor2 = "texto";

console.log(compararValores(valor1, valor2));

function compararValores(valor1, valor2){
    let booleano = Boolean(valor1 && valor2);
    return booleano;
};