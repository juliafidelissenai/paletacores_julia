let tela = document.querySelector("#tela-de-pintura");/*é um comando do JS para buscar um elemento dentro do seu html utilizando as mesmas regras de seleção que usamos no CSS.*/
let corAzul = document.querySelector("#pincel-azul");
let corVermelha = document.querySelector("#pincel-vermelho");
let corAmarela = document.querySelector("#pincel-amarelo");
let corRosa = document.querySelector("#pincel-rosa");
let corVerde = document.querySelector("#pincel-verde");
let corLaranja = document.querySelector("#pincel-laranja");
let corRoxa = document.querySelector("#pincel-roxo");
let corPreta = document.querySelector("#pincel-preto");
let corBranca = document.querySelector("#pincel-branco");
let nomeCor = document.querySelector("h3")

corAzul.addEventListener("click", azul);
corVermelha.addEventListener("click", vermelho);
corAmarela.addEventListener("click", amarelo);
corRosa.addEventListener("click", rosa);
corVerde.addEventListener("click", verde);
corLaranja.addEventListener("click", laranja);
corRoxa.addEventListener("click", roxo);
corPreta.addEventListener("click", preto);
corBranca.addEventListener("click", branco)


function azul(){
    tela.style.background = "blue";
    nomeCor.innerHTML = "Azul"; /* é uma propriedade de elementos HTML no JS usadopara ler e alterar todo o conteudo de uma tag.*/
}

function vermelho(){
    tela.style.background = "tomato";
    nomeCor.innerHTML = "Tomato";
}

function amarelo(){
    tela.style.background = "gold";
    nomeCor.innerHTML = "Gold";
}

function rosa(){
    tela.style.background = "pink";
    nomeCor.innerHTML = "Rosa";
}

function verde(){
    tela.style.background = "green";
    nomeCor.innerHTML = "Verde";
}

function laranja(){
    tela.style.background = "orange";
    nomeCor.innerHTML = "Laranja";
}

function roxo(){
    tela.style.background = "purple";
    nomeCor.innerHTML = "Roxo";
}

function preto(){
    tela.style.background = "black";
    nomeCor.innerHTML = "Preto";
}

function branco(){
    tela.style.background = "white";
    nomeCor.innerHTML = "Branco";
}









