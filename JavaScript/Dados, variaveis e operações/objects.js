// objeto

let carro = {
    marca: "Toyota",
    modelo: "Corola",
    ano: "2024",
    cor: "Prata",
    airbag: "true",
    itens: ["abs", "4 portas", "step"],
}

carro.modelo = "sw4";

console.log(carro);
console.log(carro.ano);
console.log(carro["cor"]);

carro.kmRodados = 12000;

console.log(carro);

delete carro.kmRodados;
console.log(carro);

console.log("airbag" in carro);
