/*
Requisito 4: Crie uma função que receba um valor investido e uma taxa de juros e retorne o
rendimento obtido com esse investimento.
Função: calcularRendimento
*/

let valor = 1000;
let taxaJuros = 5;

let result = calcularRendimento(valor, taxaJuros);

function calcularRendimento(valor, taxaJuros){
    return valor * (taxaJuros / 100);
}

console.log(result);

