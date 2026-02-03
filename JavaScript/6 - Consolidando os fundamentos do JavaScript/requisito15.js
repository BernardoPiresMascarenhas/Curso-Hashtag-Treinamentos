/*
Exercício 15: Crie uma função que receba um array de nomes de investimentos que você
quer fazer e um segundo parâmetro com seu nome.
Função: gerarListaInvestimentos
*/

const investimentos = [5000, 2000, 15000];
const nome = "Maria";
const resultado = gerarListaInvestimentos(investimentos, nome);

function gerarListaInvestimentos(investimentos, nome){
    let array = []; 
    
    for(let i = 0; i < investimentos.length; i++){
        let novoObjeto = {
            investimento: investimentos[i],
            nome: nome
        };
        array.push(novoObjeto); 
    }
    return array; 
}

console.log(resultado);