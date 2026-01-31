// escopo global

let global = "Sou escopo global!"

function mensagem(){
    console.log(global);
}

mensagem();

// escopo local (funçao)

function mensagem2(){
    let local = "Sou escopo local!"
    console.log(local);
}

console.log(local);

// escopo de bloco

if(true){
    let bloco = "Sou scopo de bloco";
}

console.log(bloco);