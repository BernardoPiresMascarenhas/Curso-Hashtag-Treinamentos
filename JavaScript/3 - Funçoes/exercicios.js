// 1) 

let provas = [5, 8, 9];

let media = calcularMedia(provas);

function calcularMedia(provas){
    let soma = 0;
    for(let i = 0; i < provas.length; i++){
        soma = soma + provas[i];
    }
    return soma / provas.length;
}

console.log("A média desse aluno é: " + media);

// 2)

let provaFinal = 9;

provas[provas.length] = provaFinal;

console.log(calcularMedia(provas));

// 3) 

