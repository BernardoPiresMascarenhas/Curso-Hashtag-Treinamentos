console.log(5 + "5");  // número é convertido para string
console.log("15" - 5); // string é convertida para numero
console.log("2" * "3"); // strings sao converidas para number 

// Converção Explícita 

let numero = 123;
console.log(typeof numero);

let string = String(numero);
console.log(typeof string);

// ou 

let num2 = 123;
console.log(typeof num2);

num2 = String(numero);
console.log(typeof num2);

// transforma numero em string

let num3 = 45;
console.log(num3);
console.log(num3.toString());

// transforma strinfg e numero em booleano

let string2 = "Meu texto";
console.log(Boolean(string2));

let num4 = 0;
console.log(Boolean(num4));

// transforma a string em numero 

let stringNumber = "12345";
console.log(Number(stringNumber));

// transforma o booleano em string

let booleano = true;
console.log(String(booleano));