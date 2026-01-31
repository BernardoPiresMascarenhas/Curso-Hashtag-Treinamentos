let string = "Olá, Mundo";

console.log(string.toUpperCase());

let string2 = "Teste";

string2 = string2.toUpperCase();

console.log(string2);

console.log(string2.toLowerCase());

// Slice(start, end) funfiona tanto em string como em array

let mensagem = "Bem vindo";

console.log(mensagem.slice(0, 3));

// substring(start, end)

console.log(mensagem.substring(0, 3));

// stringOriginal.replace("o que procurar", "novo valor");  usado em strings

console.log(string.replace("Mundo", "JavaScript"));

// indexof (Palavra) - ele mostra o íncdice de onde começa a palavra digitada

console.log(string.indexOf("Mundo"));

console.log(string.indexOf("JavaScript"));  // vai retornar -1 porque nao exite.


// split(delimiter , limit)

let texto = "maçã,banana,laranja,uvas";

let frutas = texto.split(",", 3);  // 3 é o limite de elementos 

console.log(frutas);

console.log(frutas[1]);

let texto2 = "maçã    banana           laranja         uvas";

let frutas2 = texto2.split(/\s+/);

console.log(frutas2);

// array.splice(início, quantidadeParaRemover, itemParaAdicionar1, ...);  usados em array

frutas2.splice(1, 1);
console.log(frutas2);


