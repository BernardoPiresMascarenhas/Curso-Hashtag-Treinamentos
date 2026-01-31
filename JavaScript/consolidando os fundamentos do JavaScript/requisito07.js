/*
Exercício 7: Crie uma função que receba uma frase e retorne a quantidade de vogais contidas
nela.
Função: contarVogais.
*/

let frase = "Olá, tudo bem?";

let result = contarVogais(frase);

function contarVogais(frase){
    let sum = 0;
    let vogais = "aáàãâeéêiíoóõôuú"

    for(let i = 0; i < frase.length; i++){
        let letra = frase[i].toLowerCase();

        if(vogais.includes(letra)){
            sum++;
        }
    }

    return sum;
}

console.log(result);