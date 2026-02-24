const lista = document.getElementById('list');

function adicionarItem(){
   const novaLi = document.createElement('li');
   novaLi.textContent = 'Novo item';

   lista.appendChild(novaLi);
}

function removerItem(){
   const ultimoItem = lista.lastElementChild;
   lista.removeChild(ultimoItem);
}