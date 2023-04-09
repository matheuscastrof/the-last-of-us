// 1 passo - da um jeito de pega o elemento do html botao
const botoesCarrosel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem')
// 2 passo -  da um jeito de indentificar o click  do usuario no botao
botoesCarrosel.forEach((botao , indice)=> { 
    botao.addEventListener('click', () => {
        console.log(indice);
        // 3 passo - desmarcar o botao selecionado anterior 
        desativarbotaoselecionado();
        // 4 passo - selecionar o botao clicado 
        botao.classList.add('selecionado');
        // 5 passo - remover a imagem anterior ativa
        esconderimagemAtiva();
        // 6 - mostrar a imagem correspondente a o botao selecionado
        imagens[indice].classList.add('ativa');
        

    })

});

function esconderimagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarbotaoselecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}
