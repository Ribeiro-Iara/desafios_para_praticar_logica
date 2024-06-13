function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let doNumero = parseInt(document.getElementById('de').value);
    let ateNumero = parseInt(document.getElementById('ate').value);
    let listaDeNumerosSorteados = [];

    if(doNumero >= ateNumero){
        alert('Campo "Do número" deve ser inferior ao campo "Até o número". Verifique!')
        return;
    }

    for(let i = 0; i != quantidade; i++){
        let numeroSorteado = parseInt(Math.random() * ateNumero + 1);
        //console.log(i, quantidade, '=' +numeroSorteado);
        if(listaDeNumerosSorteados.includes(numeroSorteado) || numeroSorteado < doNumero){
            return sortear();
        }else{
            listaDeNumerosSorteados.push(numeroSorteado);
        }
    }
    mensagem('Números sorteados: ' +listaDeNumerosSorteados);
    listaDeNumerosSorteados = [];
    mudaClasse('container__botao-desabilitado', 'container__botao');
}

function reiniciar(){
    listaDeNumerosSorteados = [];
    mensagem('Números sorteados:  nenhum até agora');
    mudaClasse('container__botao', 'container__botao-desabilitado');
    quantidade.value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
}

function mudaClasse(de, para){
    let btn_reiniciar = document.getElementById('btn-reiniciar')
    btn_reiniciar.classList.remove(de)
    btn_reiniciar.classList.add(para);
}

function mensagem(texto){
    let campo = document.getElementById('numerosSorteados');
    campo.innerHTML = texto
}