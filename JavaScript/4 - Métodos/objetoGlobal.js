// Math = operações matemáticas e Date = datas

const PI = Math.PI;
console.log(PI);

const raizQuadrada = Math.sqrt(16);
console.log(raizQuadrada);

const potencia = Math.pow(2, 4);
console.log(potencia);

let numero = 3.45;
let numero2 = 3.6;

console.log(Math.round(numero));  // arredonda o numero
console.log(Math.round(numero2));

const aleatorio = Math.random() * 100;

console.log(Number.parseFloat(aleatorio.toFixed(2)));


// Math.min() - retorna o valor minimo dentro de uma lista
// Math.max() - retorna o valor máximo dentro de uma lista
let lista = [13, 22, 67, 24];

console.log(Math.min(...lista));
console.log(Math.max(...lista));

// DATE

const dataAtual = new Date();
console.log(dataAtual.getFullYear());
console.log(dataAtual.getMonth()); // 0 sera janeiro e 11 dezembro
console.log(dataAtual.getDate());
console.log(dataAtual.getHours());
console.log(dataAtual.getMinutes());
console.log(dataAtual.getSeconds());


let timestamp = dataAtual.getTime();
console.log(dataAtual);
console.log(timestamp);

// timestamp - representação numerica - data referencia 1 de janeiro de 1970.

console.log(new Date(1769372154561));
console.log(new Date(1769372173814));

let agora = new Date("2026-01-25")
console.log(agora.getMonth() + 1);

