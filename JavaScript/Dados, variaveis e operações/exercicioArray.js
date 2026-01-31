// 1)

let produtos = ["Pc", "Celular", "Talet"];

console.log(produtos[1]);

produtos[2] = "Notebook";

console.log(produtos);

// 2)

let clientes = ["Lucas", "Pedro", "Bernardo"];

clientes[3] = "Luna";
console.log(clientes);

clientes.length = clientes.length - 1;

console.log(clientes);


// 3)

let produto = {
    nome: "Notebook",
    preco: "4000",
    quant: "20"
}

console.log(produto.nome);

produto.preco = 5000;

console.log(produto);


// 4)

let venda = {
    cliente: "Bernardo",
    produto: "Tv",
    valor: "2000"
}

venda.data = "12/08/2024";

delete venda.produto;

console.log(venda);

// 5)

let estoque = ["Maçã", "Banana", "Uva"];

let novoEstoque = [...estoque];

novoEstoque[3] = "Pera";

console.log(estoque);
console.log(novoEstoque);

let funcionario = {
    nome: "Bernardo",
    idade: "20",
    salario: "1500"
}

let novoFuncionario = {...funcionario};

novoFuncionario.beneficio = "VR";

console.log(funcionario);
console.log(novoFuncionario);
