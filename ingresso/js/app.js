function comprar(){
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    let quantidade = parseInt(document.getElementById('qtd').value);
    let diminui = parseInt(document.getElementById('qtd-'+tipoIngresso).textContent);
    console.log(tipoIngresso, diminui)
    if(quantidade <= diminui && quantidade > 1){
        diminui -= quantidade;
        document.getElementById('qtd-'+tipoIngresso).textContent = diminui;
        document.getElementById('qtd').value = '';
        alert('Compra realizada com sucesso!')
    }else{
        alert('Quantidade não disponivel para o tipo '+tipoIngresso+'!');
    }   
}