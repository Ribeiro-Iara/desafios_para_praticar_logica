function alterarStatus(id){
    let elemento = document.getElementById('game-'+id);
    let imagem = elemento.querySelector('.dashboard__item__img');
    let botao = elemento.querySelector('.dashboard__item__button');

    if(botao.classList.contains('dashboard__item__button--return')){
        if(confirm("Tem certeza que deseja devolver o jogo?")){
            botao.classList.remove('dashboard__item__button--return');
            imagem.classList.remove('dashboard__item__img--rented');
            botao.textContent = 'Alugar';
        }else{
            return;
        }
        
    }else{
        botao.classList.add('dashboard__item__button--return');
        imagem.classList.add('dashboard__item__img--rented');
        botao.textContent = 'Devolver'
    }
}