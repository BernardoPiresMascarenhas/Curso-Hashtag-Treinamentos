let meuElemento = document.getElementById("meuElemento");


function tornarCirculo() {
   meuElemento.classList.add("circle");
   meuElemento.classList.remove("square");
}

function tornarQuadrado() {
   meuElemento.classList.remove("circle");
   meuElemento.classList.add("square");
}

function alterarFormato(){
   meuElemento.classList.toggle("circle");
   meuElemento.classList.toggle("square");
}

function verificarClasse() {
   if(meuElemento.classList.contains("circle")){
      console.log("Elemento possui a classe circle");
   }
   else{
      console.log("Elemento não possui a classe circle")
   }
}