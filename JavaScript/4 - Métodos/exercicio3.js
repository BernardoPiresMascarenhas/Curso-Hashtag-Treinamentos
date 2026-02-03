/*
Exercício 1: Converta valores de texto em números
Imagine que você tem valores em formato de texto, como "150.50" ou "200px". Seu objetivo é
convertê-los para números reais
*/

let valueString = "150.50";
let valueString2 = "200px";

console.log(Number.parseFloat(valueString));
console.log(Number.parseFloat(valueString2));

/*
Exercício 2: Somar valores numéricos de uma entrada de formulário
Você recebe dois valores numéricos como string. Converta-os e some-os corretamente.
*/

let entrada1 = "10";
let entrada2 = "20.5";

entrada1 = Number.parseInt(entrada1);
entrada2 = Number.parseFloat(entrada2);

let soma = entrada1 + entrada2;

console.log(soma);

/*
Exercício 3: Arredonde valores financeiros
Você tem um valor financeiro com várias casas decimais e deseja exibi-lo com apenas duas
casas decimais.
*/

let valor = 1234.56789;
console.log(valor.toFixed(2));

/*
Exercício 4: Ajustar a precisão de um número
Você tem um número muito grande e precisa exibi-lo com uma precisão específica.
*/

let numero  = 12345.689;
console.log(numero.toPrecision(7));

/*
Exercício 5: Verificar se a entrada é um número válido
Você recebe uma entrada do usuário e precisa garantir que seja um número válido antes de
realizar qualquer operação
*/

let entrada3 = "123abc";

let resultado = Number.isInteger(entrada3);

if(resultado){
    console.log(`O numero: ${entrada3} é válido.`)
}
else{
    console.log(`O numero: ${entrada3} não é válido.`)
}

/*
Exercício 6: Verificar se o número é finito
Você quer garantir que um número não seja Infinity ou NaN antes de usá-lo em cálculos.
*/

let entrada4 = 1/ 0;

let resultado2 = Number.isFinite(entrada4);

if(resultado2){
    console.log(`O número: ${entrada4} não é infinito`);
}
else{
    console.log(`O número: ${entrada4} é infinito`);
}