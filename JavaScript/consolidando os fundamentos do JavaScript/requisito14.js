/*
Requisito 14: Crie uma função que receba um array de despesas e retorne um novo array
contendo "Alto Gasto" para despesas maiores que 100 e "Gasto Controlado" para despesas
iguais ou menores que 100.
Função: controleDespesas
*/

let array = [150, 80, 200, 60, 120];

controleDespesas(array);

function controleDespesas(array){
    for(let i =0; i < array.length; i++){
        if(array[i] > 100){
            console.log(`A despesa ${array[i]} teve como resultado: Alto Gasto!`);
            array[i] = "Alto Gasto!";
        }
        else{
            console.log(`A despesa ${array[i]} teve como resultado: Gasto Controlado!`);
            array[i] = "Gasto Controlado!";
        }
    }

    console.log(array);
}