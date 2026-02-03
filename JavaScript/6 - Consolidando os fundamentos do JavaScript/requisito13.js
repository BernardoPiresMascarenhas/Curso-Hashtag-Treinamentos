/*
Requisito 13: Crie uma função que receba duas distâncias (distancia1 e distancia2) e retorne
qual pessoa está mais próxima, indicando "Pessoa 1" se a primeira distância for menor,
"Pessoa 2" se a segunda distância for menor, ou "Ambos estão a mesma distância" se as
distâncias forem iguais.
Função: calcularDistancia
*/

let distancia1 = 10;
let distancia2 = 15;


calcularDistancia(distancia1, distancia2);

function calcularDistancia(distancia1, distancia2){
    if(distancia1 == distancia2){
        console.log("Ambas as distancias são iguais.");
    }
    else if(distancia1 < distancia2){
        console.log("Distancia 1 é mais proxima");
    }
    else{
        console.log("Distancia 2 é mais proxima");
    }
}