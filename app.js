let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1; 

// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo do número secreto';

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Escolha um número entre 1 e 10';

//função com parâmetros
function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
function exibirMensagemInicial(){
    exibirTextoNaTela('h1','Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}
exibirMensagemInicial();


function verificarChute(){
    let chute = document.querySelector('input').value
    if(chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Você acertou!');
        let palavraTentativa = tentativas > 1? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar'). removeAttribute('disabled');//precisa ser igual o HTML
    }else{
        if (chute > numeroSecreto){
            exibirTextoNaTela('p', 'O número é menor');
        }else{
            exibirTextoNaTela('p', 'O número é maior');
        }
        tentativas++
        limparCampo();
    }
    
}

function gerarNumeroAleatorio(){
    return parseInt(Math.random() * 10) + 1 //return para a variável ser armazenada na l1
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = ''; //seja uma string vazia
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);

}