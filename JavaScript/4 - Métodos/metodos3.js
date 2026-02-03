const objeto = {
    propriedade: 10,
    metodos: function(){
        console.log("olá sou um metodo");
    }
}

objeto.metodos();

const produto = {
    nome: "Laptop",
    preco: 2500,
    disponibilidade: true
};

console.log(Object.keys(produto));  // mostra as chaves do objeto 
console.log(Object.values(produto)); // mostra os valores das chaves do objeto
console.log(Object.entries(produto)); // trasnforma um array com cada chave e seu respequitivo valor

Object.assign(produto, {emEstoque: 10, categoria: "Eletronicos"}); // adicionar novas propriedades com esse metodo
console.log(produto);

Object.defineProperty(produto,"disponibilidade", {value : false}); // modificar o valor de uma propriedade existente
console.log(produto);

const pessoa = {
    nome: "Carlos",
    idade: 30
};

const trabalho = {
    profissao: "Engenheiro",
    cidade: "Sp"
};

const funcionario = {

};

Object.assign(funcionario, pessoa, trabalho);    // adiciona as propriedades de um objeto em outro

console.log(funcionario);

Object.defineProperty(funcionario, "Salario", {  // adiciona uma nova propriedade mas tem q passar configs
    value: 2000,
    enumerable: true,
    writable: true,
    configurable: true
});
console.log(funcionario);

delete funcionario.salario;
console.log(funcionario);


const pessoa2 = {
    falar: function (){
        console.log("Olá!");
    },
    cidade: "Bh"
};

const carro = {
    modelo: "Corolla",
    marca: "Toyota"
};

const joao = Object.create(pessoa2);   // joao herda metodos e propriedades de pessoa2
Object.assign(joao, carro);           // copia as propriedades 

joao.falar();
console.log(joao.cidade);

joao.nome = "João"; // agora vai ter as propriedades
joao.idade = 33;

console.log(joao);

console.log(joao.hasOwnProperty("nome"));  // verifica se o objeto tem tal propriedade 

 