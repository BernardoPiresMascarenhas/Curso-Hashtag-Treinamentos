let listaA = [1, 2, 3];
let listaB = listaA;

listaB[0] = 99;

console.log(listaA);
console.log(listaB);

let string = "Olá";
let mensagem = string;

mensagem = "Olá, Bem Vindo";

console.log(string);
console.log(mensagem);


let objA = {nome: "Bernardo"};
let objB = objA;

objB.idade = 20;

console.log(objA);
console.log(objB);

let listaC = [...listaA];  // fazer uam copia e modificar sem alterar a original

console.log(listaC);

listaC[3] = 20;

console.log(listaC);
console.log(listaA);

let objC = {...objA};

objC.cor = "Branco";

console.log(objC)
console.log(objA)