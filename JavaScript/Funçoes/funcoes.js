
saudacao("Lucas");
saudacao("Bernardo");

function saudacao(nome){
    console.log(`Olá ${nome}, bem vindo ao site!`);
}

let total = function (a, b){
    return a + b;
};

console.log(total(3, 4));

// Funçoes de alta ordem

function aplicarOperacao(x, operacao){
    return operacao(x);
}

function dobrar(numero){
    return numero * 2;
}

const resultado = aplicarOperacao(5, dobrar);

console.log(resultado);

// receber uma função como resultado

function criarIncrementador(incremento){
    return function(numero){
        return numero + incremento;
    };
}

const incrementarPor2 = criarIncrementador(2);
console.log(incrementarPor2(5));


// Parâmetros opcionais e valores padrão 


function cumprimentar(nome = "Visitante", saudacao = "Boa Tarde"){
    console.log(`Olá ${nome}, ${saudacao}`);
}

cumprimentar();

