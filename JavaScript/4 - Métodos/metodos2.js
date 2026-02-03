let produtos = ["carrino", "boneca", "bola"];

produtos.push("lego", "corda"); // adiciona ao final do array
console.log(produtos);

produtos.unshift("navio"); // adiciona ao inicio do array
console.log(produtos);

produtos.pop(); // remove o ultimo elemento
console.log(produtos);

produtos.shift(); // remove o primeiro elemento 
console.log(produtos);

let letras = ["d", "g", "l", "a", "d", "m", "b", "c"];
let numeros = [1, 6, 5, 4, 10, 8, 2, 19, 3];

letras.sort(); // ordena em ordem alfabetica
console.log(letras);

letras.reverse();  // reverter os elementos
console.log(letras);

numeros.sort();
console.log(numeros);

numeros.reverse();
console.log(numeros);

let mesclaArray = letras.concat(numeros);  // junta arrays 
console.log(mesclaArray);

let frutas = ["maçã", "uva", "laranja"];

console.log(frutas.splice(0, 1)); // remove o primeiro alemento
console.log(frutas.splice(0, 1, 10)); // subistitui o primeiro elemento por 10

console.log(frutas);


let frutas2 = ["melão", "melancia", "manga", "kiwi"];

console.log(frutas2.includes("melão")); // verifica se tem tal item no array. Retorna true or false

if(frutas2.indexOf("melão") >= 0){
    console.log("true");
}
else{
    console.log("false");
}

console.log(frutas2.every(      // verifica se todos os elemtos possuiu algum tipo de regra (letra M no inicio)
    function (frutas2) {
        return frutas2.includes("m");
    }
));

console.log(frutas2.some(       // verifica se pelo menos um elemento possuiu algum tipo de regra (letra U no inicio)
    function (frutas2){
        return frutas2.includes("k");
    }
));

console.log(frutas2.join(", ")); // join trasforma o array em uma string

// exercicio: verifique se pelo menos um dos numeros é maior que 7.

let numeros2 = [2, 8, 5, 1];

let resultadoSome = numeros2.some((numero) => numero > 7);
console.log(resultadoSome);

// exercicio: verifique se todos os numeros são maior que 3.

let numeros3 = [4, 6, 8, 2];

let resultadoEvery = numeros3.every((numero) => numero > 3);
console.log(resultadoEvery);

