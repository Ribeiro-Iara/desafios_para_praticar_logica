function alterarStatus(id){
    let elemento = document.getElementById('game-'+id);
    let imagem = elemento.querySelector('.dashboard__item__img');
    let botao = elemento.querySelector('.dashboard__item__button');

    if(botao.classList.contains('dashboard__item__button--return')){
        botao.classList.remove('dashboard__item__button--return');
        imagem.classList.remove('dashboard__item__img--rented');
        botao.textContent = 'Alugar'
    }else{
        botao.classList.add('dashboard__item__button--return');
        imagem.classList.add('dashboard__item__img--rented');
        botao.textContent = 'Devolver'
    }
}