// && (AND)
let idade = 20;
let codigPromocional = true;

// verificar se o ususario tem a idade suficiente e possui um codigo

let podeFazerLogin = idade >= 18 && codigPromocional;

console.log(podeFazerLogin);

let idade2 = 15;

let podeFazerLogin2 = idade2 >= 18 && codigPromocional;

console.log(podeFazerLogin2);

// OR (ou)

let loginOr = idade >= 18 || codigPromocional;
let loginOr2 = idade2 >= 18 || codigPromocional;

console.log(loginOr);
console.log(loginOr2);

// ! (not)

let perfilConfigurado = false;

let alerta = !perfilConfigurado;

console.log(alerta);