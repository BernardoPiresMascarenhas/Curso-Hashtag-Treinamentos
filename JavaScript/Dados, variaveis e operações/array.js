let lista = ["Banana", 23, true, "Maça"];

console.log(lista[1]);

lista = ["Banana", 777, false];

console.log(lista);

lista[2] = 33;

console.log(lista);

lista[3] = "item novo";

console.log(lista);

console.log(lista.length);

lista.length = lista.length - 1;

console.log(lista);


let matriz = [
    [100, 200, 300],
    [400, 500, 600],
    [700, 800, 900],
];

console.log(matriz);
console.log(matriz[1]);


matriz[1][1] = 1000;

console.log(matriz[1]);

let soma = 0;

for(let i = 0; i < 3; i++){
    soma = soma + matriz[1][i];
}

console.log(soma);

