// 1)

let string = "javascript é divertido";

let resultado = string.replace("javascript", "javascript".toUpperCase());

console.log(resultado);

// 2)

let string2 = "Aprendendo Javascript";

let palavra = string2.substring(0, 10);

console.log(palavra.toLowerCase());

// 3) 

let string3 = "Aprendendo Python";

let palavraExtrair = string3.slice(11);

let palavra2 = string3.replace(palavraExtrair, "Javascript");

console.log(palavra2);

// 4)

let string4 = "cadeira, mesa, sofá, armário";

let produto = string4.split(", ");

produto.splice(produto.indexOf("sofá"), 1);

console.log(produto);



