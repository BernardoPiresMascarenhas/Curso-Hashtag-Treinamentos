let inteiro = 42;
let numeroPontoFlutuante = 3.4567;

// verificar se o numero é inteiro - retornar boobleano

console.log(Number.isInteger(inteiro));
console.log(Number.isInteger(numeroPontoFlutuante));


// Formatar numero de acordo com as casas decimais 

console.log(numeroPontoFlutuante.toFixed(2));  // 2 casas decimais 
console.log(numeroPontoFlutuante.toFixed()); // quando nao passa nada, entende que não tem casas decimais 


// formatar numero precisao especifica

console.log(numeroPontoFlutuante.toPrecision(3)); // numero de digitos que o numero ira conter

console.log(inteiro.toPrecision(4));


let flutuanteString = "32.7869";
let inteiroString = "42";

console.log(Number.parseFloat(flutuanteString)); // convertendo string para float 
console.log(Number.parseInt(inteiroString));    // convertendo string para inteiro

let num = 42;
console.log(num.toString());  // convertendo inteiro para string
console.log(num.toString(2));  // base binaria

console.log(num.toString(6));  // base binaria
console.log(num.toString(8));  // base octal


// converter uma string para um inteiro, considerando a base numerica

console.log(Number.parseInt(flutuanteString, 8));  // base 8

console.log(Number.parseInt(flutuanteString).toFixed(2)); // com duas casas decimais 

 
// NaN (Not A Number) - Mais frequencia de resultar

let notANumber = NaN;
let notANumber2 = 0 / 0;
let string = Number("Olá");

console.log(notANumber, notANumber2, string);

// verifica se o valor passado é NaN

console.log(Number.isNaN(notANumber));
console.log(Number.isNaN(notANumber2));
console.log(Number.isNaN(string));
console.log(Number.isNaN(67));  // false


// Infinity / -infinity

let infinito = Infinity;
let infinito2 = 1/0;
let multiplicacao = Number.MAX_VALUE * 2;

console.log(infinito, infinito2, multiplicacao);

console.log(Number.isFinite(infinito));
console.log(Number.isFinite(infinito2));
console.log(Number.isFinite(multiplicacao));
console.log(Number.isFinite(67));   // true

