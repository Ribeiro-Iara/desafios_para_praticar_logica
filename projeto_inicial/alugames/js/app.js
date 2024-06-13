let alugados = 0;
jogosAlugados();

function alterarStatus(id){
    let elemento = document.getElementById('game-'+id);
    let imagem = elemento.querySelector('.dashboard__item__img');
    let botao = elemento.querySelector('.dashboard__item__button');
    let nome = elemento.querySelector('.dashboard__item__name');

    if(botao.classList.contains('dashboard__item__button--return')){
        if(confirm("Tem certeza que deseja devolver o jogo "+nome.textContent+'?')){
            botao.classList.remove('dashboard__item__button--return');
            imagem.classList.remove('dashboard__item__img--rented');
            botao.textContent = 'Alugar';
            alugados--;
            jogosAlugados();
        }
    }else{
        botao.classList.add('dashboard__item__button--return');
        imagem.classList.add('dashboard__item__img--rented');
        botao.textContent = 'Devolver'
        alugados++;
        jogosAlugados();
    }
}

function jogosAlugados(){
    alugados = document.querySelectorAll('.dashboard__item__button--return').length;
    document.getElementById('alugados').innerHTML = 'Total de jogos alugados: ' +alugados;
}