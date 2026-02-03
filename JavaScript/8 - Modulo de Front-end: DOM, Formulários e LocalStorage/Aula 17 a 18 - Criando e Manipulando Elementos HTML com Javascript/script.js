
function criarElementoInnerText() {
   const ul = document.getElementById("lista-de-elementos");

   const novaLi = document.createElement("li");
   novaLi.innerText = "Novo input com InnerText ";

   const novoInput = document.createElement("input");

   console.log("Adicionando novos inputs e lis");

   novaLi.appendChild(novoInput);
   ul.appendChild(novaLi);
}

function criarElementoInnerHTML() {
   const ul = document.getElementById("lista-de-elementos");
   const novaLi = document.createElement("li");

   novaLi.innerHTML = '<input type="text" />';    // poderia ser também: novaLi.innerHTML = '<p> Criei um paragrafo novo </p>';
   ul.appendChild(novaLi); 
}

function criarElementoTextContent(){
   const ul = document.getElementById("lista-de-elementos");
   const novaLi = document.createElement("li");
   const novoInput = document.createElement("input");

   novaLi.textContent = "Atribuino conteúdo TextContent";
   novaLi.appendChild(novoInput);
   ul.appendChild(novaLi);
}


// innerText - texto - estilização css 
// TextContent - texto
// innerHtml - conteudo html e texto