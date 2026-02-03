// getElementsByTagName: Seleciona elementos pelo nome da tag

const titulo = document.getElementsByTagName("h2");
console.log("Selecionando pela tag h2: ", titulo);

// getElementsByClassName: Seleciona elementos pela class

const paragrafosItens = document.getElementsByClassName("texto-lista");
console.log("Selecionando pela classe texto-lista: ", paragrafosItens);

// getElementById: Seleciona elementos pelo id

const destacado = document.getElementById("destacado");
console.log("Selecionando pelo id destacado: ", destacado);

//querySelector: Seleciona um elemento usando um seletor CSS

const destacadoSelector = document.querySelector('#destacado');
console.log("Selecionando iD pelo seletor CSS: ", destacadoSelector);

//querySelectorAll: Seleciona todos os elementos que correspondem a um seletor CSS

const todosPItens = document.querySelectorAll('.texto-lista');
console.log("Selecionando multiplos elementos pelo seletor CSS: ", todosPItens);

//getElementsByName: Seleciona elementos pelo atributo name

const inputName = document.getElementsByName('username');
console.log("Selecionando pelo name: ", inputName);

//querySelectorAll: Seleciona todos os elementos 

const todosElementos = document.querySelectorAll('*');
console.log("Selecionando todos os elementos: ", todosElementos);