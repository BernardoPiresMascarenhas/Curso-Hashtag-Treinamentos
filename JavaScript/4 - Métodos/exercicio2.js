/* Exercício 1: Crie um objeto chamado Venda com as propriedades produto, quantidade,
precoUnitario e desconto. Adicione um método chamado calcularTotal que calcule o
valor total da venda, considerando o desconto. Adicione também um método chamado
detalharVenda que retorne uma string detalhando a venda. */

const venda = {
    produto: "Tv",
    quant: 2,
    precoUnit: 1500,
    desconto: 0,

    calculartotal: function(){
        const total = this.quant * this.precoUnit;
        return total - (total * (this.desconto / 100));
    },
    detalharVenda: function(){
        return `Venda realizada no valor de: ${this.calculartotal()}`;
    },
    aplicarDesconto: function(percentual){
        this.desconto = percentual;
    },

    atualizarQuant: function(novaQuant){
        this.quant = novaQuant;
    },
    verificarEstoque: function(estoqueDisponivel){
        return "Verificaçao concluida: " + (this.quant <= estoqueDisponivel);
    },

};

console.log(venda.detalharVenda());

/* 
Exercício 2: Adicione um método ao objeto Venda chamado aplicarDesconto que recebe
um valor percentual e atualiza o desconto da venda. Aplique um desconto de 10% e verifique o
valor total com o método calcularTotal
*/

venda.aplicarDesconto(10);

console.log(venda.detalharVenda());

/*
Exercício 3: Adicione um método ao objeto Venda chamado atualizarQuantidade que
recebe um número e altera a quantidade do produto na venda. Atualize a quantidade e
verifique o total da venda após a atualização.

*/

venda.atualizarQuant(3);

console.log(venda.detalharVenda());

/* 
Exercício 4: Adicione um método chamado verificarEstoque que recebe a quantidade
disponível em estoque e retorna uma mensagem fixa indicando se a venda pode ser realizada
ou se é necessário ajustar a quantidade.

*/

console.log(venda.verificarEstoque(3));

/*
Exercício 5: Retorne um array com todas as suas propriedades e valores do objeto Venda.
Exiba as propriedades e valores em um formato legível.
*/

let arrayVenda = Object.entries(venda);
console.log(arrayVenda);

/*
Exercício 6: Obtenha um array com os nomes de todas as propriedades do objeto Venda.
Exiba as propriedades do objeto.
*/

const keys = Object.keys(venda);
console.log(keys);

/**
Exercício 7: Obtenha um array com todos os valores das propriedades do objeto Venda.
Exiba os valores das propriedades.
*/
const values = Object.values(venda);
console.log(values);

/*
Exercício 8: Verifique se o objeto Venda possui a propriedade desconto. Retorne a
verificação diretamente em uma mensagem fixa
*/
const verificacao = venda.hasOwnProperty("desconto");

if(verificacao == true){
    console.log("Existe essa propriedade");
}
else{
    console.log("Não existe essa propriedade");
}

/*
Exercício 9: Crie um novo objeto NovaVenda que contenha as mesmas propriedades e
valores de Venda, mas com um produto e quantidade diferentes. Exiba o novo objeto
NovaVenda.
*/

const novaVenda = Object.assign({}, venda, {    // {} vazio pois não tem nada criado ainda e produto e quantidade novos
    produto: "Notebook",
    quant: 1,
});

console.log(novaVenda);

/*
Exercício 10: Adicione uma nova propriedade data ao objeto Venda, definindo-a como não
enumerável. Exiba todas as propriedades do objeto Venda e, em seguida, exiba o valor da
nova propriedade data separadament
*/

Object.defineProperty(venda, "Data", {
    value: "21/05/2004",
    enumerable: false,
});

console.log(Object.keys(venda));
console.log(venda.data);

/*
Exercício 11: Crie um novo objeto DescontoEspecial que herde as propriedades do objeto
Venda, mas com um desconto fixo de 20%. Exiba as propriedades do novo objeto e verifique
se o desconto foi aplicado corretamente.
*/

const descontoEspecial = Object.create(venda);
descontoEspecial.desconto = 20;

console.log(Object.keys(descontoEspecial));
console.log(descontoEspecial.detalharVenda());

/*
Exercício 12: Remova a propriedade desconto do objeto Venda. Verifique se a propriedade
foi removida com sucesso e exiba as propriedades restantes do objeto.
*/

delete venda.desconto;

console.log(venda.hasOwnProperty("desconto"));

console.log(Object.keys(venda));

delete venda.aplicarDesconto;