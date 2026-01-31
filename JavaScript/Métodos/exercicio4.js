/*
Exercício 1: Você precisa criar uma função que receba um número decimal e o arredonde de
três formas diferentes: para baixo, para cima e para o valor inteiro mais próximo. Mostre o
resultado de cada arredondamento no console.
*/

let numero = 7.89;

arredondar(numero);

function arredondar(numero){
    
    let baixo = Number.parseInt(numero);
    let cima = Number(numero.toFixed());
    let arredondarProximo = Math.round(numero);

    console.log(baixo);
    console.log(cima);
    console.log(arredondarProximo);
};

/*
Exercício 2: Crie uma função que receba uma lista de números e retorne o valor máximo e o
valor mínimo dessa lista.
*/

let lista = [10, 5, 20, 40, 1, 7];

maiorNum(lista);

function maiorNum(lista){
    console.log(Math.max(...lista));
    console.log(Math.min(...lista));
};

/*
Exercício 3: Você deve criar uma função que gere três tipos de números aleatórios: um entre 0
e 1, outro entre 0 e 100, e um número inteiro aleatório entre dois valores específicos. Exiba os
resultados no console.
*/

function gerarNumAleatorio (min, max) {
    const zeroAum = Number(Math.random().toFixed(2));
    const zeroAcem = Number((Math.random() * 100).toFixed(2));
    const cinquentaEcem = Number((Math.random() * (max - min) + min).toFixed(2));

    console.log(zeroAum);
    console.log(zeroAcem);
    console.log(cinquentaEcem);
    
};

gerarNumAleatorio(50, 100);


/*
Exercício 4: Crie uma função que receba duas datas e calcule a diferença entre elas em dias.
Exiba o resultado no console.
*/

function calcularDiferencaEmDias(dataInicial, dataFinal){
    let diferecaMilissegundos = new Date(dataFinal) - new Date(dataInicial);
    let diferencaDias = diferecaMilissegundos / (1000 * 60 * 60 * 24);

    console.log(diferencaDias);
}

calcularDiferencaEmDias("2024-01-01", "2024-10-07");

/*
Exercício 5: Crie uma função que receba uma data e extraia o ano, mês e dia dessa data.
Exiba as informações no console.
*/

let data3 = new Date("2024-10-07T00:00:00");

extrairData(data3);

function extrairData(data3){
    console.log("Ano: " + data3.getFullYear());
    console.log("Mês: " + (data3.getMonth() + 1));
    console.log("Dia: " + data3.getDate());
};

/*
Exercício 6: Crie uma função que receba a data de nascimento de uma pessoa e calcule sua
idade com base na data atual. Exiba a idade no console.
*/

let dataCalcular = new Date("1990-05-15");

calcularIdade(dataCalcular);


function calcularIdade(dataCalcular){
    const dataAtual = new Date();
    let idade = dataAtual.getFullYear() - dataCalcular.getFullYear();

    console.log(idade);
};