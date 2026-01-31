/*
Requisito 11: Crie uma função que receba um número inteiro e retorne um booleano
indicando se o número é primo.
Função: ehPrimo
*/

let num = 7;

let result = ehPrimo(num);

function ehPrimo(num){
    if(num <= 1){
        return false;
    }

    for(let i = 2; i < num; i++){
        if(num % i == 0){
            return false;
        }
    }

    return true;
}

if(result){
    console.log(`O numero ${num} é primo`);
}
else{
    console.log(`O numero ${num} não é primo`);
}