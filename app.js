let numeroSecreto = gerarNumeroAleatorio();

// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo do número secreto';

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Escolha um número entre 1 e 10';

//função com parâmetros
function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
//chamando a função pós criação
exibirTextoNaTela('h1','Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');


function verificarChute(){
    let chute = document.querySelector('input').value
    console.log(chute == numeroSecreto); //boolean - true or false 
}

function gerarNumeroAleatorio(){
    return parseInt(Math.random() * 10) + 1 //return para a variável ser armazenada na l1
}