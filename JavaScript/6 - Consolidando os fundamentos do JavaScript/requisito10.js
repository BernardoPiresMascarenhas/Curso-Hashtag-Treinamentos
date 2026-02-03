/*
Exercício 10: Crie uma função que receba uma palavra e retorne um booleano indicando se a
palavra é um palíndromo.
Função: ehPalindromo
*/

let palavra = "arara";

let result = ehPalindromo(palavra);

function ehPalindromo(palavra){
    let bool = true;
    let tam = palavra.length;
    for(let i = 1; i <= tam; i++){

        if(palavra[i - 1] == palavra[tam - i]){
            bool = true;
        }
        else{
            bool = false;
            i = (tam + 1);
        }
    }
    return bool;
}

if(result){
    console.log(`A palavra: ${palavra} é palindromo`);
}
else{
    console.log(`A palavra: ${palavra} não é palindromo`);
}