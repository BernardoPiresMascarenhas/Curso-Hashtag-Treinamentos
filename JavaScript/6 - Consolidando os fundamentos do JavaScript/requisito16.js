/*
Exercício 16: Crie uma função que receba uma frase e codifique as vogais de acordo com a
seguinte substituição: a → 1, e → 2, i → 3, o → 4, u → 5. Crie uma segunda função que
decodifique a frase, revertendo as substituições.
Funções: codificar e decodificar
*/

let frase = "a casa e o sol";

let fraseCodificada = codificar(frase);
console.log(fraseCodificada);

let fraseDecodificada = decodificar(fraseCodificada);
console.log(fraseDecodificada);

function codificar(frase){
    let letras = frase.split("");

    for(let i = 0; i < letras.length; i++){
        let letra = letras[i].toLowerCase();
        
        switch(letra) {
            case "a": case "á": case "à": case "ã": case "â":
                letras[i] = 1;
                 break;
            case "e": case "é": case "é": case "ê":
                letras[i] = 2;
                break;
            case "i" : case "í":
                letras[i] = 3;
                break;
            case "o": case "ó": case "õ":case "ô":
                letras[i] = 4;
                break;
            case "u": case "ú":
                letras[i] = 5;
                break;
            }
        
    }
        
    return letras.join("");
}

function decodificar(frase){
    let letras = frase.split("");

    for(let i = 0; i < letras.length; i++){
        let letra = letras[i].toLowerCase();
        
        switch(letra) {
            case "1":
                letras[i] = "a";
                 break;
            case "2":
                letras[i] = "e";
                break;
            case "3":
                letras[i] = "i";
                break;
            case "4":
                letras[i] = "o";
                break;
            case "5":
                letras[i] = "u";
                break;
            }
        
    }
        
    return letras.join("");
}